from django.utils.translation import gettext_lazy as _
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

from .manager import CustomUserManager
# Create your models here.

class User(AbstractUser):
    #Contacts:
    is_tourist = models.BooleanField(default=True)
    is_agency = models.BooleanField(default=False)

    username = None

    email = models.EmailField(_('email address'), unique=True)

    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number should be in correct format'. Up to 15 digits allowed.")
    mobile_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    country = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=300, blank=True)
    profile_pic = models.ImageField(blank=True, null=True) # upload_to=upload_to

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

