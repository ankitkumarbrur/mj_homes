from rest_framework import viewsets
from .models import User, Address
from .serializers import UserSerializer, AddressSerializer
from rest_framework.permissions import AllowAny

from authentication.permissions import IsOwnerOrAdmin
from mixins.CustomMixins import PreprocessMixin, ViewsetActionPermissionMixin

class User_view(ViewsetActionPermissionMixin, PreprocessMixin, viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    action_based_permission_classes = {
        'list' : (IsOwnerOrAdmin,),
        'create' : (AllowAny,),
    }
    permission_classes = (IsOwnerOrAdmin, )

class Address_view(viewsets.ModelViewSet, PreprocessMixin):
    serializer_class = AddressSerializer
    permission_classes = (IsOwnerOrAdmin,)
    MODEL = Address

    def get_queryset(self):
        print(type(self))
        return self.preprocess()