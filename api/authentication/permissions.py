from rest_framework.permissions import BasePermission, IsAdminUser, AllowAny
from users.models import User
class IsOwnerOrAdmin(BasePermission):
    message = "Accessing foreign items is restricted to owner only"

    def has_object_permission(self, request, view, obj):
        # print("Checking owner has object permission")
        if type(obj) == type(request.user) : 
            return obj == request.user or request.user.is_staff
        return obj.user == request.user or request.user.is_staff
        
    def has_permission(self, request, view):
        # print("Checking owner permission")
        return request.user.is_authenticated and (request.user.is_active or request.user.is_staff)

class IsAdmin(IsAdminUser):
    pass