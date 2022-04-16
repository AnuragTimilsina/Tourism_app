from .views import RegisterAPI
from django.urls import path
from rest_framework.authtoken import views

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='tourist-register'),
    path('api/token-auth/', views.obtain_auth_token),
]