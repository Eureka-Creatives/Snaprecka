from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from smtplib import SMTPException, SMTPRecipientsRefused, SMTPSenderRefused, SMTPDataError, SMTPConnectError, SMTPAuthenticationError
from datetime import datetime, timezone, timedelta
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from dotenv import load_dotenv
import jwt, os, socket

load_dotenv()
print(load_dotenv())

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
    with open('private.pem', 'r') as file:
        KEY = file.read()
    token = jwt.encode(payload=PAYLOAD, key=KEY, algorithm=ALGORITHM)
    print(token)
    return token

def decode_token(token):
    with open("public.pem", "r") as f:
        KEY = f.read()
    try:
        decoded_token = jwt.decode(token, key=KEY, algorithms=[os.getenv("ALGO")])
        print(decoded_token)
        return decoded_token
    except jwt.ExpiredSignatureError:
        print("Token has expired")
        return None
    except jwt.InvalidTokenError:
        print("Invalid token")
        return None

def send_email_for_verification(user):
    token = generate_token(user)
    URL = os.getenv("FRONTEND_URL")
    SUBJECT = "Confirm Your Email Address"
    html_content = render_to_string(
        template_name="verify_email.html",
        context= {
            "year": 2025,
            "verification_url": f"{URL}?token={token}"
        }
    )
    print(f"{URL}?token={token}")

    msg = EmailMultiAlternatives(
        subject=SUBJECT,
        from_email= os.getenv("EMAIL_HOST_USER"),
        to=[user]
    )

    print(os.getenv("EMAIL_HOST_USER"))
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
