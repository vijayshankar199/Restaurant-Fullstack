from django.db import models

# Create your models here.



class owner(models.Model):
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=30)


class menu(models.Model):
    name=models.CharField(max_length=20)
    category=models.CharField(max_length=10)
    price=models.IntegerField()
    
