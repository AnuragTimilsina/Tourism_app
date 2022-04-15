from rest_framework import serializers
from .models import User


class touristSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'is_tourist', 'is_agency', 'mobile_number', 'country', 'address') # Profile Image to be handeled soon.


# Register Serializer:
class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password', 'is_tourist', 'is_agency', 'mobile_number', 'country', 'address')
        extra_kwargs = {'password': {'write_only': True}}


        def create(self, validated_data):

            validated_data['is_tourist'] = True
            validated_data['is_agency'] = False
            user = User.objects.create_user(username=validated_data['username'], email=validated_data['email'], is_tourist=validated_data['is_tourist'], is_agency=validated_data['is_agency'], mobile_number=validated_data['mobile_number'], country=validated_data['country'], address=validated_data['address'])

            user.save()

            return user