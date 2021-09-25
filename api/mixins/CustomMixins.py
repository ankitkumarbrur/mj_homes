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

class PreprocessMixin:
    def preprocess(self, *args, **kwargs):
        self.user =  User.objects.get(id = self.user) if self.request.session.get('decoded_user', None) else None
        if self.actions == 'list':
            return self.MODEL.objects.filter(user = self.user) if self.user else self.MODEL.objects.none()
        else:
            return self.MODEL.objects.all()