import re
from django.db import models
from agencies.models import agency
from tourists.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from .storage import OverwriteStorage, ServiceImagePath, DestinationImagePath
from django.utils.translation import gettext_lazy as _
# Create your models here.


class destination(models.Model):
    destination_id = models.AutoField(primary_key=True)
    destination_name = models.CharField(max_length=300)
    destination_description = models.TextField(blank=True)
    destination_pic = models.ImageField(_('Destination Image'), storage=OverwriteStorage(
    ), upload_to=DestinationImagePath, blank=True, null=True)

    def __str__(self):
        return(str(self.destination_name))


class service(models.Model):
    service_id = models.AutoField(primary_key=True)
    Destination = models.ForeignKey(destination, on_delete=models.CASCADE)
    Agency = models.ForeignKey(agency, on_delete=models.CASCADE, null=True)
    package_name = models.CharField(max_length=100, blank=False, default="")
    departure_date = models.DateField()
    no_of_person = models.PositiveIntegerField(default=0)
    amount=models.PositiveIntegerField()
    users = models.ManyToManyField(User, blank=True)
    description = models.TextField(blank=True)
    service_pic = models.ImageField(_('service Image'), storage=OverwriteStorage(
    ), upload_to=ServiceImagePath, blank=True, null=True)

    def __str__(self):
        return(str(self.package_name))


class review(models.Model):
    review_id = models.AutoField(primary_key=True)
    tourist = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    feedback = models.TextField(max_length=200)
    rating = models.SmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)]) # 5 possible rating values 1-5
    Service = models.ForeignKey(service, on_delete=models.CASCADE, null=True)


