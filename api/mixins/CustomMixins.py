# THIS MIXIN PROVIDES ACTION BASED ACCESS TO PERMISSION CLASSES
class ViewsetActionPermissionMixin:
    """
    action_based_permission_classes = {
        'list' : (permission,..),
        'create': (),
        'retrieve': (),
        'update' : (),
        'partial_update' : (),
        'destroy' : ()
    }
    """
    def get_permissions(self):
        print('CREATE IN ACTION CLASSES')
        if self.action in self.action_based_permission_classes:
            return [permission() for permission in self.action_based_permission_classes[self.action]]
        elif self.permission_classes:
                return [permission() for permission in self.permission_classes]
        else:
            return []

# MUST INCLUDE THIS MIXIN WITH EVERY IS_OWNER PERMISSION CLASS VIEW
class QuerysetMixin:
    def get_queryset(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            self.user =  self.request.user
        else:
            return self.MODEL.objects.none()

        if self.action == 'list':
            if self.user.is_staff:
                return self.MODEL.objects.all()
            return self.MODEL.objects.filter(user = self.user) if self.user else self.MODEL.objects.none()
        else:
            return self.MODEL.objects.all()