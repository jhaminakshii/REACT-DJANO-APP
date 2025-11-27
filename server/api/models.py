from django.db import models

# Create your models here.

class Note(models.Model):
    userName = models.CharField(max_length=50)
    desc = models.CharField(max_length=350)


    def __str__(self):
        return self.userName