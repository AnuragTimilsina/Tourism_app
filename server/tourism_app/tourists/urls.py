from .views import RegisterAPI, CustomObtainAuthToken
from django.urls import path

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='tourist-register'),
    path('api/authenticate/', CustomObtainAuthToken.as_view()),
]