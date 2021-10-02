from rest_framework import viewsets
from .serializers import CartSerializer, WishlistSerializer
from .models import Cart , WishList

from mixins.CustomMixins import ViewsetActionPermissionMixin, QuerysetMixin
from authentication.permissions import IsOwnerOrAdmin, IsAdmin, AllowAny
# Create your views here.
class CartView(QuerysetMixin, ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    MODEL = Cart
    serializer_class = CartSerializer
    permission_classes = (IsOwnerOrAdmin,)
    action_based_permission_classes = {
        # 'list' : (IsOwnerOrAdmin,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }


class WishListView(QuerysetMixin, ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    MODEL = WishList
    serializer_class = WishlistSerializer
    permission_classes = (IsOwnerOrAdmin,)
    action_based_permission_classes = {
        # 'list' : (IsOwnerOrAdmin,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        'update' : (IsAdmin),
        'partial_update' : (IsAdmin),
        # 'destroy' : (permission_classes)
    }