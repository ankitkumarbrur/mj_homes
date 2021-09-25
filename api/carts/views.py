from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


from .serializers import CartSerializer, WishList, WishlistSerializer
from .models import Cart, WishList, CartItem, WishListItem

from mixins.CustomMixins import PreprocessMixin
from authentication.permissions import IsAdmin, IsOwner
# Create your views here.

class CartView(viewsets.ModelViewSet, PreprocessMixin):
    serializer_class = CartSerializer
    permission_classes = (IsOwner, IsAdmin)
    MODEL = Cart

    def get_queryset(self):
        return self.preprocess()

    def retrieve(self, request, pk = None):
        pk = self.user.active_cart
        cart = get_object_or_404(self.queryset, pk = pk)
        serializer = self.serializer_class(cart)
        return Response(serializer.data)
    
    def destroy(self, request, pk = None):
        pk = self.user.active_cart
        CartItem.objects.filter(cart = pk).delete()
        return Response({'detail':'success'}, status=200)
    
    def update(self, request, pk = None):
        print("THIS IS CART UPDATE")
        print(request.data)
        print("------------------")
        return Response({'detail':'success'}, status=200)

class WishListView(viewsets.ModelViewSet, PreprocessMixin):
    serializer_class = WishlistSerializer
    permission_classes = (IsOwner, IsAdmin)
    MODEL = WishList

    def get_queryset(self):
        return self.preprocess()