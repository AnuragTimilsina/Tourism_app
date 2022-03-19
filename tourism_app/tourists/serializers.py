from multiprocessing.spawn import is_forking
from rest_framework import serializers
from .models import User


# Tourists serializer:
class touristSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'is_tourist', 'is_agency', 'mobile_number', 'country', 'address') # Profile Image to be handeled soon.


# Register Serializer:
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'is_tourist', 'is_agency', 'mobile_number', 'country', 'address')
        extra_kwargs = {'password': {'write_only': True}}


        def create(self, validated_data):
            validated_data['is_tourist'] = True
            validated_data['is_agency'] = False
            user = User.objects.create_user(validated_data['email'], validated_data['password'], validated_data['is_tourist'], validated_data['is_agency'], validated_data['mobile_number'], validated_data['country'], validated_data['address'])

            return user