from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.exceptions import ValidationError
from django_otp.models import Device
from django.utils.crypto import get_random_string
from django.utils import timezone
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from smtplib import SMTPConnectError, SMTPAuthenticationError, SMTPRecipientsRefused, SMTPSenderRefused, SMTPDataError, SMTPException
from datetime import timedelta
from dotenv import load_dotenv
import uuid, os, socket
load_dotenv()

class CustomManager(BaseUserManager):
    def create_user(self, username, email, location, role, password=None, **extra_fields):
        if not all([username, email, location]):
            raise ValueError('This field cannot be blank!')
        email = self.normalize_email(email)
        if self.model.objects.filter(email=email).exists() or self.model.objects.filter(username=username).exists():
            raise ValidationError({'User already exist with email or username '})
        user = self.model(username=username, email=email, location=location, role=role, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, location, role, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        # Set role for developer to seperate from tenant
        extra_fields.setdefault("role", "developer")
        return self.create_user(username=username, email=email, location=location, password=password, role=role, **extra_fields)
    
class CustomUser(AbstractUser):
    first_name = None
    last_name = None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=255, unique=True, null=False, blank=False)
    email = models.EmailField(unique=True, null=False, blank=False)
    location = models.CharField(max_length=255, null=False, blank=False)
    role = models.CharField(max_length=9, null=False, blank=False, default="user")
    email_verified = models.BooleanField(default=False)
    token_valid = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "location"]
    objects = CustomManager()

    def save(self, *args, **kwargs):
        self.username = self.username.strip().lower()
        self.email = self.email.strip().lower()
        self.location = self.location.strip().title()
        self.role= self.role.strip().lower()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email
    
class EmailOTP(Device):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="otp")
    otp_code = models.CharField(max_length=int(os.getenv('OTP_LENGTH')), null=True, blank=True)
    valid_until = models.DateTimeField(blank=True, null=True)

    def send_otp(self):
        subject = "OTP"
        self.otp_code = get_random_string(length=int(os.getenv("OTP_LENGTH")), allowed_chars=os.getenv("ALLOWED_CHARS"))
        self.valid_until = timezone.now() + timedelta(minutes=int(os.getenv("EXPIRATION_TIME")))
        html_content = render_to_string(
            template_name="otp.html",
            context={'OTP': self.otp_code}
        )  

        msg = EmailMultiAlternatives(
            subject=subject,
            from_email=os.getenv("EMAIL_HOST_USER"),
            to=[self.user.email]
        )
        msg.attach_alternative(content=html_content, mimetype="text/html")
        try:
            msg.send()
            return True
        except SMTPAuthenticationError:
            print("SMTP Authentication failed. Check your email credentials.")
            return None
        except SMTPConnectError:
            print("Failed to connect to the SMTP server. Is it reachable?")
            return None
        except SMTPRecipientsRefused:
            print("Recipient address was refused by the server.")
            return None
        except SMTPSenderRefused:
            print("Sender address was refused by the server.")
            return None
        except SMTPDataError:
            print("SMTP server replied with an unexpected error code (data issue).")
            return None
        except SMTPException as e:
            print(f"SMTP error occurred: {e}")
            return None
        except socket.gaierror:
            print("Network error: Unable to resolve SMTP server.")
            return None
        except socket.timeout:
            print("Network error: SMTP server timed out.")
            return None
        except Exception as e:
            print(f"An unexpected error occurred: {e}")
            return None
    
    def verify_otp(self, otp):
        if otp != self.otp_code:
            return False
        if timezone.now() > self.valid_until:
            return False
        return True
    
class UserImage(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="images")
    description = models.TextField(null=False, blank=False)
    snapshot = models.ImageField(upload_to='snapshots/', null=True, blank=True)





