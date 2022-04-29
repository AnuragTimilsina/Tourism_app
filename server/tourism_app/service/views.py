from .models import service, destination, review
from tourists.models import User
from agencies.models import agency
from .serializers import ServiceSerializer, DestinationSerializer, ReviewSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from tourists.permissions import agencyPermission, touristPermission
# Create your views here.


# Service:
class ServiceListView(generics.ListAPIView):
    queryset = service.objects.all()
    # permission_classes = (touristPermission,)
    serializer_class = ServiceSerializer


# class DestinationServiceListView(generics.ListAPIView):
#     queryset = service.objects.all()
#     permission_classes = (IsAuthenticated, touristPermission)
#     serializer_class = ServiceSerializer
#     lookup_field = 'Destination'


class ServiceUpdateView(generics.UpdateAPIView):
    queryset = service.objects.all()
    # permission_classes = (agencyPermission,)
    serializer_class = ServiceSerializer
    lookup_field = 'service_id'


class ServiceDetailView(generics.RetrieveAPIView):
    queryset = service.objects.all()
    # permission_classes = (touristPermission,)
    serializer_class = ServiceSerializer
    lookup_field = 'service_id'


class ServiceCreateView(generics.CreateAPIView):
    queryset = service.objects.all()
    # permission_classes = (agencyPermission,)
    serializer_class = ServiceSerializer


class ServiceDeleteView(generics.DestroyAPIView):
    queryset = service.objects.all()
    permission_classes = (agencyPermission,)
    serializer_class = ServiceSerializer
    lookup_field = 'service_id'


class DestinationListView(generics.ListAPIView):
    queryset = destination.objects.all()
    # permission_classes = (touristPermission,)
    serializer_class = DestinationSerializer


class DestinationDetailView(generics.RetrieveAPIView):
    queryset = destination.objects.all()
    # permission_classes = (touristPermission,)
    serializer_class = DestinationSerializer
    lookup_field = 'destination_id'


# Get all services from the selected destination:
class ListDestinationServices(generics.ListAPIView):
    serializer_class = ServiceSerializer
    lookup_url_kwarg="destination_id"

    def get_queryset(self):
        print(self.kwargs)
        destination = self.kwargs.get(self.lookup_url_kwarg)
        print(destination)
        queryset = service.objects.filter(Destination_id=destination)
        print(queryset)
        return queryset 


# Get all services from the selected agency: 
class ListAgencyServices(generics.ListAPIView):
    serializer_class = ServiceSerializer
    lookup_url_kwarg="agency_id"

    def get_queryset(self):
        print(self.kwargs)
        agency = self.kwargs.get(self.lookup_url_kwarg)
        print(agency)
        queryset = service.objects.filter(Agency_id=agency)
        print(queryset)
        return queryset 


### Review view:

class ReviewListView(generics.ListAPIView):
    queryset = review.objects.all()
    # permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer


class ReviewCreateView(generics.CreateAPIView):
    queryset = review.objects.all()
    # permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer


class ReviewDetailView(generics.RetrieveAPIView):
    queryset = review.objects.all()
    # permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer
    lookup_field = 'review_id'


class ReviewDeleteView(generics.DestroyAPIView):
    queryset = review.objects.all()
    # permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer
    lookup_field = 'review_id'


class ReviewUpdateView(generics.UpdateAPIView):
    queryset = review.objects.all()
    # permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer
    lookup_field = 'review_id'

