from django.db import models
from django.utils import timezone

# Create your models here.

class user(models.Model):
    username=models.CharField(max_length=30)
    mobile_no=models.CharField(max_length=15)
    email=models.CharField(max_length=40)
    date=models.DateField(default=timezone.now)

