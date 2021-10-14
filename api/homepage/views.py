from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from mixins.CustomMixins import QuerysetMixin, ViewsetActionPermissionMixin
from authentication.permissions import *
from .serializers import *
from .models import *
# Create your views here.

class Carousel_View(ViewsetActionPermissionMixin, ModelViewSet):
    serializer_class = CarouselSerializer
    queryset = Carousel.objects.all()
    permission_classes = [IsAdmin]
    
    action_based_permission_classes = {
        'list' : (AllowAny,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }


class DOTD_view(ViewsetActionPermissionMixin, ModelViewSet):
    queryset = DOTD.objects.all()
    serializer_class = DOTDSerializer
    permission_classes = (IsAdmin,)
    http_method_names = ['get', 'patch', 'head', 'options', 'trace']

    action_based_permission_classes = {
        'list' : (AllowAny,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }
