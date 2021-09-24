from rest_framework.permissions import BasePermission, IsAdminUser

from django.db.models import query
from django.shortcuts import render

from .models import User, Address
from rest_framework.generics import GenericAPIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.mixins import ListModelMixin
from rest_framework import permissions, status

from .serializers import UserSerializer, AddressSerializer
from rest_framework.mixins import ListModelMixin, CreateModelMixin, UpdateModelMixin

from authentication.permissions import IsOwner, IsAdmin

from mixins.Mixins import QuerysetMixin


# Create your views here.

class User_view(GenericAPIView, ListModelMixin, ):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
    # parser_classes = (parsers.JSONParser, MultipartJsonParser)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            User = serializer.save()
            if User:
                return Response(status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)



class Address_view(viewsets.ModelViewSet, QuerysetMixin):
    serializer_class = AddressSerializer
    # queryset = Address.objects.all()
    # action_based_permission_classes = {
    #     'list' : [IsOwner,]
    # }
    permission_classes = (IsOwner,)
    
    def get_queryset(self, *args, **kwargs):
        return self.owner_queryset(MODEL=Address)
    #     if 'user' in self.request.data:
    #         user = User.objects.get(id = self.request.data['user'])
    #         queryset = Address.objects.filter(user = user)
    #         return queryset

    #     return Address.objects.none()