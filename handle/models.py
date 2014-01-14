from django.db import models

# Create your models here.

class ihepecard(models.Model):
    idcard=models.CharField(max_length=8888,primary_key=True)
    receiver_email=models.CharField(max_length=8888)
    greetings=models.CharField(max_length=88888)
    pic=models.CharField(max_length=8888)
    sender_name=models.CharField(max_length=8888)
    sender_email=models.CharField(max_length=8888)
