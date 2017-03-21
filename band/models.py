from django.db import models
import datetime
from django.utils import timezone

# Create your models here.
class Band(models.Model):
    # no multiple bands with the same name
    name=models.CharField(max_length=100,null=False,blank=False,unique=True)
    date_added=models.DateField(default=timezone.now)
    image=models.CharField(max_length=300,null=True,blank=True)
    bio=models.TextField(max_length=5000,null=True,blank=True)

    def __str__(self):
        return str(self.id)+" - "+self.name