from .models import service
from rest_framework import serializers


class ServiceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = service
        fields = ['Agency', 'destination', 'package_name', 'departure_date', 'no_of_person', 'amount', 'description', 'users']

    extra_kwargs = {
        'Agency': {'required': True},
        'destination': {'required': True},
        'package_name': {'required': True},
        'departure_date': {'required': True},
        'no_of_person': {'required': True},
        'amount': {'required': True},
        'description': {'required': True},
    }

    def create(self, validated_data):
        services = service.objects.create(
            Agency = validated_data.get('Agency'),
            destination = validated_data.get('destination'),
            package_name = validated_data.get('package_name'),
            departure_date = validated_data.get('departure_date'),
            no_of_person = validated_data.get('no_of_person'),
            amount = validated_data.get('amount'),
            description = validated_data.get('description'),
        )

    def update(self, instance, validated_data):
        instance.Agency = validated_data.get('Agency')
        instance.destination = validated_data.get('destination')
        instance.package_name = validated_data.get('package_name')
        instance.departure_date = validated_data.get('departure_date')
        instance.no_of_person = validated_data.get('no_of_person')
        instance.amount = validated_data.get('amount')
        instance.description = validated_data.get('description')
        instance.save()
        return instance

    