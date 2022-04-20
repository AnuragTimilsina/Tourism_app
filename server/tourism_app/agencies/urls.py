from django.urls import path
from .views import AgencyAuthToken

urlpatterns = [
    path('api/authenticate/', AgencyAuthToken.as_view(), name='agency-login'),
]