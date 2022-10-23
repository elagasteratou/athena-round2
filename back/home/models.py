from django.conf import settings
from django.db import models


class Home(models.Model):
    address = models.CharField(max_length=100)
    EPC = models.CharField(max_length=100)

    def __str__(self):
        return self.name
