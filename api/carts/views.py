from django.shortcuts import render

from rest_framework.generics import GenericAPIView
from rest_framework import viewsets
from rest_framework.mixins import ListModelMixin

from .serializers import CartSerializer
from .models import Cart, WishList
# Create your views here.

class CartView(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class WishListView(viewsets.ModelViewSet):
    queryset = WishList.objects.all()
    serializer_class = CartSerializer

    