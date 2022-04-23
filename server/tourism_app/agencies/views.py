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


# Verify Agency Token: 
from rest_framework.views import APIView


class VerifyAgencyToken(APIView):
    '''
        This is the endpoint to verify token. 
    '''

    def post(self, request, *args, **kwargs):
        user = [int(user) for user in User.objects.filter(is_agency=True).values_list('id', flat=True)]
        tokens = []
        for id in user:
            tokens.append([str(tok) for tok in Token.objects.filter(user=id)])
        
        token = [tok[0] for tok in tokens if bool(tok)==True]
        
        # print(tokens)
        if request.data['token'] in token:
            return Response({'token_verified':True})
        return Response({'token_verified':False})


