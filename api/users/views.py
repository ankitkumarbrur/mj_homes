from rest_framework import viewsets
from .models import User, Address
from .serializers import UserSerializer, AddressSerializer

from authentication.permissions import IsOwner, IsAdmin
from mixins.CustomMixins import PreprocessMixin

class User_view(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdmin,)

class Address_view(viewsets.ModelViewSet, PreprocessMixin):
    serializer_class = AddressSerializer
    MODEL = Address
    action_based_permission_classes = {
        'list' : (IsOwner,)
    }
    permission_classes = (IsOwner, IsAdmin)

    def get_queryset(self):
        return self.preprocess()