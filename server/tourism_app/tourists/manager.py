from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    """
        Create and save a User with the given username and password.
    """

    def _create_user(self, username, password, **extra_fields):
        if not username:
            raise ValueError(_('The Username must be set'))
        if not password:
            raise ValueError(_('Password is not provided'))
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db) 
        return user

    def create_user(self, username, password, **extra_fields):
        extra_fields.setdefault('is_tourist', True)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_agency', False)
        extra_fields.setdefault('is_staff', False)

        return self._create_user(username, password, **extra_fields)

    def create_superuser(self, username, password, **extra_fields):
        """
            Create and save a SuperUser with the given username and password.
        """
        extra_fields.setdefault('is_tourist', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_agency', True)
        extra_fields.setdefault('is_staff', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser should also be a staff!'))

        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True!'))

        return self._create_user(username, password, **extra_fields)