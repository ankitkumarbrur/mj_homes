from django.shortcuts import render
from rest_framework.response import Response
from .models import Cart,CartItem
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
from rest_framework import permissions
from .serializers import CartSerializer

# Create your views here.
class Cart_view(GenericAPIView, ListModelMixin, ):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
   