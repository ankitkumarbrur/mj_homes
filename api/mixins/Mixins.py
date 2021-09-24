from django.db.models.base import Model
from users.models import User

class ViewsetActionPermissionMixin:
    def get_permissions(self):
        try:
            return [permission() for permission in self.action_based_permission_classes[self.action]]
        except KeyError:
            if self.permission_classes:
                return [permission() for permission in self.permission_classes]
            else:
                return []

class QuerysetMixin:
    def owner_queryset(self, MODEL):
        print("queryset")
        user = self.request.session.get('decoded_user', None)
        if user:
            return MODEL.objects.filter(user = User.objects.get(id = user))
        else:
            return MODEL.objects.none()