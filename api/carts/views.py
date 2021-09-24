from django.shortcuts import render

from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin

from .serializers import CartSerializer
from .models import Cart
# Create your views here.

class CartView(GenericAPIView, ListModelMixin):
    serializer_class = CartSerializer

    def get_queryset(self):
        return Cart.objects.all()
    
    def get(self, request, *args, **kwargs):
        print(request)
        return self.list(request, *args, **kwargs)
