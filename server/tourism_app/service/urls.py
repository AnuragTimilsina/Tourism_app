from django.urls import URLPattern, path
from .import views

urlpatterns = [
    #Services:
    path('addservice/', views.ServiceCreateView.as_view(), name='add-service'),
    path('serviceupdate/<service_id>/', views.ServiceUpdateView.as_view(), name='update-service'),
    path('servicelist/', views.ServiceListView.as_view(), name='service-list'),
    path('servicedetail/<service_id>/', views.ServiceDetailView.as_view(), name='service-detail'),
    path('servicedelete/<service_id>/', views.ServiceDeleteView.as_view(), name='service-delete'),
]