from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

# Create your models here.
class agency(AbstractUser):
    name = models.CharField(max_length=300, blank=False, default="")

    # Contacts
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number should be in correct format'. Up to 15 digits allowed.")

    Landline_number = models.CharField(
        validators=[phone_regex], max_length=17, blank=True)
    mobile_number = models.CharField(
        validators=[phone_regex], max_length=17, blank=True)

    address = models.CharField(max_length=300, blank=True)
    agency_profile_pic = models.ImageField(default="")

    def __str__(self):
        return self.name

