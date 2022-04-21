from .views import RegisterAPI, CustomObtainAuthToken, VerifyToken
from django.urls import path

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='tourist-register'),
    path('api/authenticate/', CustomObtainAuthToken.as_view(), name='tourist-login'),
    path('api/verifytoken/', VerifyToken.as_view(), name='verify-token'),
]