from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from tourists.models import User
from django.core.validators import RegexValidator

# Create your models here.
class agency(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = None
    last_name = None
    company_name = models.CharField(max_length=300, blank=False, default="")

    # Contacts
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number should be in correct format'. Up to 15 digits allowed.")

    Landline_number = models.CharField(
        validators=[phone_regex], max_length=17, blank=True)

    def __str__(self):
        return self.email

