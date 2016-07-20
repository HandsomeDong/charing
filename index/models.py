from django.db import models


class Person(models.Model):
    Id = models.CharField(max_length=60)
    password = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

