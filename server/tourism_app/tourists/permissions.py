from rest_framework.permissions import BasePermission

class agencyPermission(BasePermission):

    def has_permission(self, request, view):
        return request.user.is_agency == True


class touristPermission(BasePermission):

    def has_permission(self, request, view):
        return request.user.is_tourist == True