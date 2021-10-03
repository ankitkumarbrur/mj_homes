from .models import Order
from .models import OrderItem
from rest_framework import viewsets
from .serializers import OrderSerializer
from carts.models import Cart

from rest_framework.response import Response

from mixins.CustomMixins import ViewsetActionPermissionMixin, QuerysetMixin

from authentication.permissions import IsOwnerOrAdmin, IsAdmin, AllowAny


class OrderView(QuerysetMixin, ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    MODEL = Order
    serializer_class = OrderSerializer
    permission_classes = (IsOwnerOrAdmin,)
    action_based_permission_classes = {
        # 'list' : (IsOwnerOrAdmin,),
        # 'create': (IsOwnerOrAdmin,),
        'retrieve': (IsAdmin),
        'update' : (IsAdmin),
        'partial_update' : (IsAdmin),
        # 'destroy' : (permission_classes)
    }

    def perform_create(self, serializer):
        cart_items = Cart.objects.filter(user = self.request.user)
        if len(cart_items) == 0:
            return
        order = serializer.save(user = self.request.user)
        for item in cart_items:
            OrderItem.objects.create(product = item.product, order = order, quantity = item.quantity)
            Cart.objects.get(id = item.id).delete()
    
    def perform_destroy(self, instance):
        instance.cancelled = True
        instance.save()