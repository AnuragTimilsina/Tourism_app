from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import touristSerializer, RegisterSerializer

# Register API:
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        tourist = serializer.save()
        return Response({
            "tourist": touristSerializer(tourist, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(tourist)[1]
        })