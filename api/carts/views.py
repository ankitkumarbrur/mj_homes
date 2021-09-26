from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


from .serializers import CartSerializer , WishList, WishlistSerializer
from .models import Cart, CartItem , WishList, WishListItem

from mixins.CustomMixins import PreprocessMixin
from authentication.permissions import IsAdmin, IsOwner
# Create your views here.

class CartView(viewsets.ModelViewSet, PreprocessMixin):
    serializer_class = CartSerializer
    # permission_classes = [permissions.IsAuthenticated & (IsOwner | IsAdmin)]
    permission_classes = [permissions.AllowAny]
    MODEL = Cart

    def get_queryset(self):
        return self.preprocess()

class WishListView(viewsets.ModelViewSet, PreprocessMixin):
    serializer_class = WishlistSerializer
    permission_classes = (permissions.AllowAny,)
    # permission_classes = (IsOwner, IsAdmin)
    MODEL = WishList

    def get_queryset(self):
        return self.preprocess()