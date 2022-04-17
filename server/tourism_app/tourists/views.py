from rest_framework import permissions
from rest_framework.response import Response
from .serializers import touristSerializer, RegisterSerializer

from django.contrib.auth import login
from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.views import APIView
from .models import User
from rest_framework.authtoken.models import Token


# Register API:
class RegisterAPI(APIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        user = User.objects.get(username=serializer.data['username'])

        token_obj, _ = Token.objects.get_or_create(user=user)

        return Response({
            'status': 200,
            'payload':serializer.data, 
            'token': str(token_obj)
        })

