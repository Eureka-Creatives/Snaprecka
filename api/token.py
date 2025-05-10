from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from smtplib import SMTPException, SMTPRecipientsRefused, SMTPSenderRefused, SMTPDataError, SMTPConnectError, SMTPAuthenticationError
from datetime import datetime, timezone, timedelta
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from dotenv import load_dotenv
import jwt, os, socket

load_dotenv()

def expiration_time(minutes):
    time_set = datetime.now(timezone.utc) + timedelta(minutes=minutes)
    return time_set

def generate_token(user):
    issued_at = datetime.now(timezone.utc)
    expired_at = expiration_time(int(os.getenv("EXPIRATION_TIME")))
    ALGORITHM = os.getenv('ALGO')
    PAYLOAD = {
        'sub': user,
        'iat': int(issued_at.timestamp()), # Unix format(int)
        'exp': int(expired_at.timestamp()) # Unix format(int)
    }
    with open('private.pem', 'rb') as file:
        KEY = serialization.load_pem_private_key(file.read(), password=None, backend=default_backend())
    token = jwt.encode(payload=PAYLOAD, key=KEY, algorithm=ALGORITHM)
    print(token)
    return token

def decode_token(token):
    ALGORITHM = os.getenv('ALGO')
    with open("public.pem", "r") as f:
        KEY = f.read()
    try:
        decoded_token = jwt.decode(token, key=KEY, algorithms=[os.getenv(ALGORITHM)])
        print(decoded_token)
        return True
    except jwt.ExpiredSignatureError:
        print("Token has expired")
        return False
    except jwt.InvalidTokenError:
        print("Invalid token")
        return False

def send_email_for_verification(user):
    token = generate_token(user)
    URL = os.getenv("URL")
    SUBJECT = "Confirm Your Email Address"
    html_content = render_to_string(
        template_name="verify_email.html",
        context= {
            "year": 2025,
            "verification_url": f"{URL}/{token}"
        }
    )

    msg = EmailMultiAlternatives(
        subject=SUBJECT,
        from_email= os.getenv("EMAIL_HOST_USER"),
        to=[user]
    )

    msg.attach_alternative(content=html_content, mimetype="text/html")

    try:
        msg.send()
    except SMTPAuthenticationError:
        print("SMTP Authentication failed. Check your email credentials.")
    except SMTPConnectError:
        print("Failed to connect to the SMTP server. Is it reachable?")
    except SMTPRecipientsRefused:
        print("Recipient address was refused by the server.")
    except SMTPSenderRefused:
        print("Sender address was refused by the server.")
    except SMTPDataError:
        print("SMTP server replied with an unexpected error code (data issue).")
    except SMTPException as e:
        print(f"SMTP error occurred: {e}")
    except socket.gaierror:
        print("Network error: Unable to resolve SMTP server.")
    except socket.timeout:
        print("Network error: SMTP server timed out.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")