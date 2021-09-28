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

    def perform_create(self, serializer):
        product = Cart.objects.filter(user = self.request.user, product = serializer.validated_data['product'])
        if len(product):
            product[0].quantity += serializer.validated_data.get('quantity', 1)
            product[0].save()
        else:
            serializer.save()

class WishListView(QuerysetMixin, ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    MODEL = WishList
    serializer_class = WishlistSerializer
    permission_classes = (IsOwnerOrAdmin,)
    action_based_permission_classes = {
        # 'list' : (IsOwnerOrAdmin,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }

    def perform_create(self, serializer):
        product = WishList.objects.filter(user = self.request.user, product = serializer.validated_data['product'])
        if len(product) == 0:
            serializer.save()