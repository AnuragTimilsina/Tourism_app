from django.contrib.auth.backends import ModelBackend
from django.core.exceptions import MultipleObjectsReturned
from django.contrib.auth import get_user_model
from django.db.models import Q

UserModel = get_user_model()


class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:  # to allow authentication through phone number or any other field, modify the below statement
            user = UserModel.objects.get(
                Q(username__iexact=username) | Q(email__iexact=username))
        except UserModel.DoesNotExist:
            UserModel().set_password(password)
        except MultipleObjectsReturned:
            return None
        else:
            if user.check_password(password) and self.user_can_authenticate(user):
                return user
            else:
                return None

    def get_user(self, user_id):
        try:
            user = UserModel.objects.get(pk=user_id)
        except UserModel.DoesNotExist:
            return None
        return user if self.user_can_authenticate(user) else None
