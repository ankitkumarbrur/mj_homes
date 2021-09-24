from django.shortcuts import render

from .models import User, Address
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.mixins import ListModelMixin
from rest_framework import permissions, status

from .serializers import UserSerializer, AddressSerializer
from rest_framework.mixins import ListModelMixin, CreateModelMixin, UpdateModelMixin


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



class Address_view(GenericAPIView, CreateModelMixin, ListModelMixin, UpdateModelMixin):
    serializer_class = AddressSerializer
    
    def get_queryset(self, *args, **kwargs):
        if 'user' in self.request.data:
            user = User.objects.get(id = self.request.data['user'])
            queryset = Address.objects.filter(user = user)
            return queryset

        return Address.objects.none()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        # self.kwargs['pk'] = 
        return self.update(request, *args, **kwargs)