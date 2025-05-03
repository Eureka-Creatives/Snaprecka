from django.db import models
from django.contrib.auth.models import User


class UserImage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(null=False, blank=False)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)



