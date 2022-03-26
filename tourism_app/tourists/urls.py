from .views import RegisterAPI, loginAPI
from django.urls import path
from knox import views as knox_views

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='tourist-register'),
    path('api/login/', loginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LoginView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall')
]