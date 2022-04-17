from django.db import models
from agencies.models import agency
from tourists.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.

class service(models.Model):
    booking_id = models.CharField(max_length=7, primary_key=True)
    Agency = models.ForeignKey(agency, on_delete=models.CASCADE, null=True)
    source = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    package_name = models.CharField(max_length=100, blank=False, default="")
    departure_date = models.DateField()
    no_of_person = models.PositiveIntegerField(default=0)
    amount=models.PositiveIntegerField()
    users = models.ManyToManyField(User, blank=True)

class review(models.Model):
    tourist = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    feedback = models.TextField(max_length=200)
    rating = models.SmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)]) # 5 possible rating values 1-5
    Service = models.ForeignKey(service, on_delete=models.CASCADE, null=True)


