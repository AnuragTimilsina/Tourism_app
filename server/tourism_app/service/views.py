from .models import service
from tourists.models import User
from agencies.models import agency
from .serializers import ServiceSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from tourists.permissions import agencyPermission, touristPermission
# Create your views here.


# Service:
class ServiceListView(generics.ListAPIView):
    queryset = service.objects.all()
    permission_classes = (IsAuthenticated, touristPermission)
    serializer_class = ServiceSerializer


class ServiceUpdateView(generics.UpdateAPIView):
    queryset = service.objects.all()
    permission_classes = (IsAuthenticated, agencyPermission)
    serializer_class = ServiceSerializer
    lookup_field = 'service_id'


class ServiceDetailView(generics.RetrieveAPIView):
    queryset = service.objects.all()
    permission_classes = (IsAuthenticated, touristPermission)
    serializer_class = ServiceSerializer
    lookup_field = 'service_id'


class ServiceCreateView(generics.CreateAPIView):
    queryset = service.objects.all()
    permission_classes = (IsAuthenticated, agencyPermission)
    serializer_class = ServiceSerializer


class ServiceDeleteView(generics.DestroyAPIView):
    queryset = service.objects.all()
    permission_classes = (agencyPermission, IsAuthenticated)
    serializer_class = ServiceSerializer
    lookup_field = 'service_id'
