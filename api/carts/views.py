from rest_framework.response import Response
from django.db.models import Q
from rest_framework import viewsets
from .serializers import *
from .models import *

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

class CouponView(ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer
    permission_classes = (IsAdmin,)

    action_based_permission_classes = {
        'list' : (AllowAny,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }

    def list(self, request, *args, **kwargs):
        thold = request.data.get('cart_price', 0)
        objs = Coupon.objects.filter(Q(threshold__lte = thold))

        queryset = self.filter_queryset(objs)

        serializer = self.get_serializer(queryset, many = True)
        return Response(serializer.data)