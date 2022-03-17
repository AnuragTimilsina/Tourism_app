from email.policy import default
from django.db import models
from datetime import datetime
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.dispatch import receiver
from django.utils.timezone import now
# Create your models here.

class tourist(AbstractUser):
    #Contacts:
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number should be in correct format'. Up to 15 digits allowed.")
    mobile_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    country = models.CharField(max_length=100, blank=True)
    profile_pic = models.ImageField(default="")

    def __str__(self):
        return self.username

