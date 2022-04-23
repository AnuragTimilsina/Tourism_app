from django.urls import path
from .views import AgencyAuthToken, VerifyAgencyToken

urlpatterns = [
    path('api/authenticate/', AgencyAuthToken.as_view(), name='agency-login'),
    path('api/verifyagencytoken/', VerifyAgencyToken.as_view(), name='verify-agency-token'),
]