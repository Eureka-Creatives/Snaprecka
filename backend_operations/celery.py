from celery import Celery

# Create a celery app instance and configure the broker directly
app = Celery('tasks', broker='redis://localhost:6379/0', backend='redis://localhost:6379/0')

# your_project/celery.py
import os
from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend_operations.settings")

app = Celery("backend_operations")

app.config_from_object("django.conf:settings", namespace="CELERY")

# Load tasks from all registered apps
app.autodiscover_tasks()

# For django-celery-beat to work with periodic tasks
from celery.schedules import crontab
app.conf.beat_scheduler = 'django_celery_beat.schedulers:DatabaseScheduler'

