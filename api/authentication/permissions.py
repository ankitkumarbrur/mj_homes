from rest_framework.permissions import BasePermission, IsAdminUser
from users.models import User
class IsOwner(BasePermission):
    message = "Accessing foreign items is restricted to owner only"

    def has_object_permission(self, request, view, obj):
        print("Checking owner has object permission")
        return obj.user == request.user
        
    def has_permission(self, request, view):
        print("Checking owner permission")
        return True

class IsAdmin(IsAdminUser):
    pass