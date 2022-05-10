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

        def validate(self, attrs):
            if attrs['password'] != attrs['password2']:
                raise serializers.ValidationError(
                    {"password": "Password fields didn't match!"})

            return attrs


class touristSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'is_tourist', 'is_agency', 'mobile_number', 'country', 'address', 'profile_pic') # Profile Image to be handeled soon.

