from rest_framework import serializers
from .models import User


# Register Serializer:
class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password', 'is_tourist', 'is_agency', 'mobile_number', 'country', 'address')
        extra_kwargs = {'password': {'write_only': True}}
        
        ## Don't implement much logic in serializer. 
        # def create(self, validated_data):

        #     validated_data['is_tourist'] = True
        #     validated_data['is_agency'] = False
        #     user = User.objects.create(username=validated_data['username'], email=validated_data['email'], is_tourist=validated_data['is_tourist'], is_agency=validated_data['is_agency'], mobile_number=validated_data['mobile_number'], country=validated_data['country'], address=validated_data['address'])
        #     print(user)
        #     user.set_password(validated_data['password'])
        #     user.save()

            

        #     return user


class touristSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'is_tourist', 'is_agency', 'mobile_number', 'country', 'address') # Profile Image to be handeled soon.

