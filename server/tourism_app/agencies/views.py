## Custom agency auth token: 
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from tourists.models import User
# from .models import agency
# from .serializers import AgencySerializer


class AgencyAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(AgencyAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)

        if user.is_agency:
            return Response({'token': token.key, 'id': token.user_id})
        else:
            return Response({'Error': "Agency not registered!!!"})
