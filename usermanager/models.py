from django.db import models
from usermanager.cryptocode import pc
from usermanager.tool import random_str


class User(models.Model):
    userid = models.CharField(max_length=60, null=True)
    password = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)

    def save(self, *args, **kwargs):
        self.password = pc.encrypt(self.password)
        self.Id = random_str()
        super(User, self).save(*args, **kwargs)


