from users.models import User


# THIS MIXIN PROVIDES ACTION BASED ACCESS TO PERMISSION CLASSES
class ViewsetActionPermissionMixin:
    def get_permissions(self):
        print('CREATE IN ACTION CLASSES')
        try:
            if self.action in self.action_based_permission_classes:
                return [permission() for permission in self.action_based_permission_classes[self.action]]
            else:
                if self.permission_classes:
                    return [permission() for permission in self.permission_classes]
        except KeyError:
            if self.permission_classes:
                return [permission() for permission in self.permission_classes]
            else:
                return []

# MUST INCLUDE THIS MIXIN WITH EVERY IS_OWNER PERMISSION CLASS VIEW
class PreprocessMixin:
    def preprocess(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            self.user =  self.request.user
        else:
            self.user = None

        if self.user:    
            if self.action == 'list':
                if self.user.is_staff:
                    return self.MODEL.objects.all()
                return self.MODEL.objects.filter(user = self.user) if self.user else self.MODEL.objects.none()
            else:
                return self.MODEL.objects.all()
        else:
            return self.MODEL.objects.none()