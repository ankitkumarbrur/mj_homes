from rest_framework import viewsets
from .models import User, Address
from .serializers import UserSerializer, AddressSerializer
from rest_framework.permissions import AllowAny

from authentication.permissions import IsOwnerOrAdmin, IsAdmin
from mixins.CustomMixins import QuerysetMixin, ViewsetActionPermissionMixin

class User_view(ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    action_based_permission_classes = {
        'list' : (IsAdmin,),
        'create' : (AllowAny,),
    }
    permission_classes = [IsOwnerOrAdmin]

class Address_view(QuerysetMixin, viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    permission_classes = (IsOwnerOrAdmin,)
    MODEL = Address