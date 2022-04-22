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
    permission_classes = (touristPermission,)
    serializer_class = ServiceSerializer


# class DestinationServiceListView(generics.ListAPIView):
#     queryset = service.objects.all()
#     permission_classes = (IsAuthenticated, touristPermission)
#     serializer_class = ServiceSerializer
#     lookup_field = 'Destination'


class ServiceUpdateView(generics.UpdateAPIView):
    queryset = service.objects.all()
    permission_classes = (agencyPermission,)
    serializer_class = ServiceSerializer
    lookup_field = 'service_id'


class ServiceDetailView(generics.RetrieveAPIView):
    queryset = service.objects.all()
    permission_classes = (touristPermission,)
    serializer_class = ServiceSerializer
    lookup_field = 'service_id'


class ServiceCreateView(generics.CreateAPIView):
    queryset = service.objects.all()
    permission_classes = (agencyPermission,)
    serializer_class = ServiceSerializer


class ServiceDeleteView(generics.DestroyAPIView):
    queryset = service.objects.all()
    permission_classes = (agencyPermission,)
    serializer_class = ServiceSerializer
    lookup_field = 'service_id'


class DestinationListView(generics.ListAPIView):
    queryset = destination.objects.all()
    permission_classes = (touristPermission,)
    serializer_class = DestinationSerializer


class DestinationDetailView(generics.RetrieveAPIView):
    queryset = destination.objects.all()
    permission_classes = (touristPermission,)
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


### Review view:

class ReviewListView(generics.ListAPIView):
    queryset = review.objects.all()
    permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer


class ReviewCreateView(generics.CreateAPIView):
    queryset = review.objects.all()
    permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer


class ReviewDetailView(generics.RetrieveAPIView):
    queryset = review.objects.all()
    permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer
    lookup_field = 'review_id'


class ReviewDeleteView(generics.DestroyAPIView):
    queryset = review.objects.all()
    permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer
    lookup_field = 'review_id'


class ReviewUpdateView(generics.UpdateAPIView):
    queryset = review.objects.all()
    permission_classes = (touristPermission,)
    serializer_class = ReviewSerializer
    lookup_field = 'review_id'

