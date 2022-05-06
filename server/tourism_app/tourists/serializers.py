from rest_framework import serializers
from .models import User


# Register Serializer:
class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password', 'password2', 'is_tourist', 'is_agency', 'mobile_number', 'country', 'address', 'profile_pic')
        extra_kwargs = {'password': {'write_only': True}, 
                        'password2': {'write_only':True},       
                    }


class touristSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'is_tourist', 'is_agency', 'mobile_number', 'country', 'address', 'profile_pic') # Profile Image to be handeled soon.

