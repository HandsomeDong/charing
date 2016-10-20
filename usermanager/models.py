from django.db import models
from django.contrib.auth.models import User


class Mail(models.Model):
    title = models.CharField(max_length=80)
    content = models.CharField(max_length=3000)
    opened = models.BooleanField(default=False)


class MailBox(models.Model):
    def __init__(self):
        Mail.objects.filter(title='88')
    belong = models.ForeignKey(User)
    address = models.CharField(max_length=30)
    receive_box = models.ManyToManyField(Mail)
    send_box = models.ManyToManyField(Mail)










