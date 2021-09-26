from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework import parsers
from rest_framework import viewsets
from mixins.CustomMixins import PreprocessMixin
from authentication.permissions import IsAdmin, IsOwner
from django.http import QueryDict

import json
from django.http.multipartparser import MultiPartParser

from .serializers import ProductSerializer, ReviewSerializer

from .models import Product, Review
from django.http import QueryDict
from users.models import User
# Create your views here.

# Parser Class
class MultipartJsonParser(parsers.MultiPartParser):
    def parse(self, stream, media_type=None, parser_context=None, *args, **kwargs):
        result = super().parse(
            stream,
            media_type = media_type,
            parser_context = parser_context
        )
        data = QueryDict('', mutable=True)

        for key, value in result.data.items():

            if type(value) != str:
                data[key] = value
                continue
            if "[" in value:
                try:
                    data[key] = json.loads(value)
                except ValueError:
                    data[key] = value
            else:
                data[key] = value

        return parsers.DataAndFiles(data, result.files)

class Product_view(GenericAPIView, CreateModelMixin, ListModelMixin):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    parser_classes = (parsers.JSONParser, MultipartJsonParser)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

# class Review_view(GenericAPIView, CreateModelMixin, ListModelMixin):
#     queryset = Review.objects.all()
#     serializer_class = ReviewSerializer

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)
class Review_view(PreprocessMixin, viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    # action_based_permission_classes = {
        # 'list' : (IsAdmin, ),
    # }
    permission_classes = (IsOwner,)
    MODEL = Review

    def get_queryset(self):
        return self.preprocess()

    # def create(self, request, *args, **kwargs):
    #     # user = User.objects.get(id = request.session.get('decoded_user', None))
    #     request.data._mutable = True
    #     request.data.update({'user' : request.session.get('decoded_user', None)})
    #     serializer = self.serializer_class(data = request.data)
    #     serializer.is_valid(raise_exception = True)

    #     serializer.save()