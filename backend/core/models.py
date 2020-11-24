from django.db import models

# Create your models here.

class Member(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField(blank=True,null=True)
    adress = models.CharField(max_length=200, blank=True,null=True)
    photo = models.ImageField(upload_to='members_profile', blank=True,null=True)

    def __str__(self):
        return self.name + " " + self.surname