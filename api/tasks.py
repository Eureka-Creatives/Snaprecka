from celery import shared_task
from django.utils import timezone
from datetime import timedelta
from api.token import send_email_for_verification
from .models import CustomUser

@shared_task
def send_verification_email(email):
    # Your email logic here
    send_email_for_verification(email)

@shared_task
def delete_unverified_users():
    threshold = timezone.now() - timedelta(minutes=5)
    users_to_delete = CustomUser.objects.filter(email_verified=False, date_joined__lt=threshold)
    count, _ = users_to_delete.delete()
    return f"{count} unverified user(s) deleted."
