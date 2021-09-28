from rest_framework import viewsets
from .models import User, Address
from .serializers import UserSerializer, AddressSerializer
from rest_framework.permissions import AllowAny

from authentication.permissions import IsOwnerOrAdmin, IsAdmin, IsAuthenticated
from mixins.CustomMixins import QuerysetMixin, ViewsetActionPermissionMixin

class User_view(ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    action_based_permission_classes = {
        'list' : (IsAdmin,),
        'create' : (AllowAny,),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }
    permission_classes = [IsOwnerOrAdmin]

class Address_view(QuerysetMixin, viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    permission_classes = (IsOwnerOrAdmin,)
    action_based_permission_classes = {
        # 'list' : (IsOwnerOrAdmin,),
        # 'create' : (IsOwnerOrAdmin,),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }
    MODEL = Address