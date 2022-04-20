from .models import agency
from rest_framework import serializers


class AgencySerializer(serializers.ModelSerializer):
    class Meta:
        model = agency
        fields = ('user', 'company_name', 'Landline_number') 

