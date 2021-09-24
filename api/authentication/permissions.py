from rest_framework.permissions import BasePermission, IsAdminUser

class IsOwner(BasePermission):
    message = "Accessing foreign items is restricted to owner only"

    def has_object_permission(self, request, view, obj):
        print('check object permission')
        return obj.user == request.session.get('decoded_user', None)
        
    def has_permission(self, request, view):
        print("Checking owner permission")
        return True

class IsAdmin(IsAdminUser):
    def has_object_permission(self, request, view, obj):
        print('check object permission')
        return obj.user == request.session.get('decoded_user', None)

    # def has_permission(self, request, view):
    #     print('check permission')
    #     return True