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
    '''
        This is the endpoint to register tourist users. 
    '''

    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response({'error':serializer.errors})

        serializer.save()

        user = User.objects.get(username=serializer.data['username'])

        token_obj, _ = Token.objects.get_or_create(user=user)

        return Response({
            'payload':serializer.errors, 
            'token': str(token_obj)
        })


## Custom auth token: 
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        return Response({'token': token.key, 'user': touristSerializer(user).data},status=200)


## Verify token: 
class VerifyToken(APIView):
    '''
        This is the endpoint to verify token. 
    '''

    def post(self, request, *args, **kwargs):
        
        tokens = [str(i) for i in Token.objects.all()]
        # print(tokens)
        if request.data['token'] in tokens:
            return Response({'token_verified':True})
        return Response({'token_verified':False})