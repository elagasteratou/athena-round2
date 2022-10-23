from django.conf import settings
from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to="images/", blank=True, null=True)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="items"
    )

    def __str__(self):
        return self.name
