from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.exceptions import ValidationError
import uuid

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

class UserImage(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="images")
    description = models.TextField(null=False, blank=False)
    snapshot = models.ImageField(upload_to='snapshots/', null=True, blank=True)





