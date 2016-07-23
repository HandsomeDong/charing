from django.db import models
from usermanager.cryptocode import pc
from usermanager.tool import random_str


class User(models.Model):
    Id = models.CharField(max_length=60)
    password = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        self.password = pc.encrypt(self.password)
        self.Id = random_str()
        super(User, self).save(*args, **kwargs)


