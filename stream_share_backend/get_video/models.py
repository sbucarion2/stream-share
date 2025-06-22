from django.db import models

# Create your models here.
class Videos(models.Model):

    name = models.CharField(max_length=100)
    description = models.CharField(max_length=5000)
    language = models.CharField(max_length=50)

    thumbnail_location = models.CharField(max_length=1000)
    video_location = models.CharField(max_length=1000)
