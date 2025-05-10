from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        from django_celery_beat.models import PeriodicTask, IntervalSchedule
        from django.db.utils import OperationalError, ProgrammingError

        try:
            schedule, _ = IntervalSchedule.objects.get_or_create(every=5, period=IntervalSchedule.MINUTES)
            PeriodicTask.objects.get_or_create(
                interval=schedule,
                name='Delete unverified users',
                task='your_app.tasks.delete_unverified_users',
            )
        except (OperationalError, ProgrammingError):
            # Avoid errors during first migrate or if DB tables aren't ready yet
            pass