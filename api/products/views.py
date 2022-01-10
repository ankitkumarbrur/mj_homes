from rest_framework import viewsets
from mixins.CustomMixins import QuerysetMixin, ViewsetActionPermissionMixin
from authentication.permissions import *

from .serializers import *

from .models import *
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q

# Create your views here.
class Product_view(ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    permission_classes = (IsAdmin,)
    action_based_permission_classes = {
        'list' : (AllowAny,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }

    def perform_create(self, serializer):
        obj = serializer.save()
        
        if 'image' in self.request.data:    
            for img in self.request.data.getlist('image', []):
                Image.objects.create(product = obj, image = img)

    def list(self, request, *args, **kwargs):
        objs = Product.objects.filter(active = True)
        query = request.GET.get('q', None)
        if query:
            objs = objs.filter(Q(keyword__icontains = query))

        queryset = self.filter_queryset(objs)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class Review_view(QuerysetMixin, ViewsetActionPermissionMixin, viewsets.ModelViewSet):
    MODEL = Review
    serializer_class = ReviewSerializer
    
    permission_classes = (IsOwnerOrAdmin,)
    action_based_permission_classes = {
        'list' : (AllowAny,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    }

class Variation_view(viewsets.ModelViewSet):
    queryset = ProductVariation.objects.all()
    serializer_class = VariationSerializer
    
    permission_classes = (IsAdmin,)
    # action_based_permission_classes = {
        # 'list' : (permission_classes,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    # }
    
class Image_view(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    
    permission_classes = (IsAdmin,)
    # action_based_permission_classes = {
        # 'list' : (permission_classes,),
        # 'create': (permission_classes),
        # 'retrieve': (permission_classes),
        # 'update' : (permission_classes),
        # 'partial_update' : (permission_classes),
        # 'destroy' : (permission_classes)
    # }
