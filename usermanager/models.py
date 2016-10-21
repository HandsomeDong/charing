from django.db import models
from django.contrib.auth.models import User


class MailBox(models.Model):
    belong = models.ForeignKey(User)


class Mail(models.Model):
    title = models.CharField(max_length=80)
    content = models.CharField(max_length=3000)
    opened = models.BooleanField(default=False)
    receiver = models.ForeignKey(MailBox, related_name='receiver')
    sender = models.ForeignKey(MailBox, related_name='sender', default=-1)

if __name__ == '__main__':
  mailBox = MailBox









