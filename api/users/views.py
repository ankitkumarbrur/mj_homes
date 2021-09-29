from rest_framework import viewsets
from .models import User, Address
from .serializers import UserSerializer, AddressSerializer
from rest_framework.permissions import AllowAny

from authentication.permissions import IsOwnerOrAdmin, IsAdmin, IsAuthenticated
from mixins.CustomMixins import QuerysetMixin, ViewsetActionPermissionMixin
from rest_framework.decorators import action
from rest_framework.response import Response


class User_view(ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdmin,)
    action_based_permission_classes = {
        # 'list' : (IsAdmin,),
        'create' : (AllowAny,),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }
    permission_classes = [IsOwnerOrAdmin]

    @action(detail = False, methods = ['put','patch'])
    def resetPassword(self, request, pk = None, *args, **kwargs):
        if request.user.check_password(request.data.get("oldPassword", "")):
            instance = request.user
            serializer = self.serializer_class(instance, data = request.data, partial = True)
            serializer.is_valid(raise_exception = True)
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"Message": "Incorrect Password"}, status = 401)

    @action(detail = False, methods = ['put','patch'])
    def changeInfo(self, request, pk = None, *args, **kwargs):
        instance = request.user
        request.data.pop('password', None)
        serializer = self.serializer_class(instance, data = request.data, partial = True)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data)

class Address_view(QuerysetMixin, viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    permission_classes = (IsOwnerOrAdmin,)
    action_based_permission_classes = {
        # 'list' : (IsOwnerOrAdmin,),
        # 'create' : (IsOwnerOrAdmin,),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }
    MODEL = Address