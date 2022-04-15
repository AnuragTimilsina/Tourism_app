from django.db import models

from django.core.validators import RegexValidator
from django.contrib.auth.models import PermissionsMixin, UserManager
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.dispatch import receiver

# Create your models here.
from tourists.storage import OverwriteStorage, ProfileImagePath
import os


class CustomUserManager(UserManager):
    def _create_user(self, username, email, password, **extra_fields):
        if not username and not email:
            raise ValueError('The given username and email must be set')
        return super(CustomUserManager, self)._create_user(username, email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    username_validator = UnicodeUsernameValidator()

    username = models.CharField(
        _('username'),
        null=False,
        blank=False,
        max_length=30,
        unique=True,
        help_text=_(
            'Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        validators=[
            username_validator
        ],
        error_messages={
            'unique': _("A user with that username already exists."),
        },
    )

    #Contacts:
    is_tourist = models.BooleanField(default=True)
    is_agency = models.BooleanField(default=False)

    # username = None

    email = models.EmailField(_('email address'), unique=True)

    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number should be in correct format'. Up to 15 digits allowed.")
    mobile_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    country = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=300, blank=True)
    profile_pic = models.ImageField(_('Profile Image'), storage=OverwriteStorage(
    ), upload_to=ProfileImagePath, blank=True, null=True)
    objects = CustomUserManager()
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.username

    def save(self, *args, **kwargs):
        if not self.email_from_work:
            self.email_from_work = self.get_email()
        super(User, self).save(*args, **kwargs)

    def get_email(self):
        return self.email

    def clean(self):
        super().clean()
        self.email = self.__class__.objects.normalize_email(self.email)

    def delete(self, *args, **kwargs):
        self.image
        super(User, self).delete(*args, **kwargs)


@receiver(models.signals.post_delete, sender=User)
def post_delete_file_path(sender, instance, **kwargs):
    if instance.image:
        dirname, filename = instance.image.path.split('/')
        if os.path.exists(dirname):
            os.remove(dirname)


