from .models import service, destination
from tourists.models import User
from agencies.models import agency
from .serializers import ServiceSerializer, DestinationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from tourists.permissions import agencyPermission, touristPermission
# Create your views here.


# Service:
class ServiceListView(generics.ListAPIView):
    queryset = service.objects.all()
    permission_classes = (IsAuthenticated, touristPermission)
    serializer_class = ServiceSerializer


# class DestinationServiceListView(generics.ListAPIView):
#     queryset = service.objects.all()
#     permission_classes = (IsAuthenticated, touristPermission)
#     serializer_class = ServiceSerializer
#     lookup_field = 'Destination'


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


class DestinationListView(generics.ListAPIView):
    queryset = destination.objects.all()
    permission_classes = (IsAuthenticated, touristPermission)
    serializer_class = DestinationSerializer


class DestinationDetailView(generics.RetrieveAPIView):
    queryset = destination.objects.all()
    permission_classes = (IsAuthenticated, touristPermission)
    serializer_class = DestinationSerializer
    lookup_field = 'destination_id'


# Get all services from the selected destination:
# from rest_framework.views import APIView
# from rest_framework.response import Response


# class ListDestinationServices(APIView):
#     """
#     View to list all users in the system.

#     * Requires token authentication.
#     * Only admin users are able to access this view.
#     """
#     permission_classes = (IsAuthenticated, touristPermission)

#     def get(self, request, format=None):
#         """
#         Return a list of all users.
#         """
#         services = service.objects.filter(Destination=request.destination_id)

#         return Response(services)
