from .models import service
from rest_framework import serializers


class ServiceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = service
        fields = ['Agency', 'Destination', 'package_name', 'departure_date', 'no_of_person', 'amount', 'description', 'users', 'service_pic']

    extra_kwargs = {
        'Agency': {'required': True},
        'Destination': {'required': True},
        'package_name': {'required': True},
        'departure_date': {'required': True},
        'no_of_person': {'required': True},
        'amount': {'required': True},
        'description': {'required': True},
    }

    # def __init__(self, instance=None, **kwargs):
    #     super().__init__(instance, **kwargs)
    #     for i in self.get_field_names():
    #         i.read_only = True

    def create(self, validated_data):
        services = service.objects.create(
            Agency = validated_data.get('Agency'),
            Destination = validated_data.get('Destination'),
            package_name = validated_data.get('package_name'),
            departure_date = validated_data.get('departure_date'),
            no_of_person = validated_data.get('no_of_person'),
            amount = validated_data.get('amount'),
            description = validated_data.get('description'),
            service_pic = validated_data.get('service_pic')
        )
        services.save()
        return services


    def update(self, instance, validated_data):
        instance.Agency = validated_data.get('Agency')
        instance.Destination = validated_data.get('Destination')
        instance.package_name = validated_data.get('package_name')
        instance.departure_date = validated_data.get('departure_date')
        instance.no_of_person = validated_data.get('no_of_person')
        instance.amount = validated_data.get('amount')
        instance.description = validated_data.get('description')
        instance.service_pic = validated_data.get('service_pic')
        instance.save()
        return instance

    