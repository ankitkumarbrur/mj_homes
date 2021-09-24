from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework import parsers
from rest_framework import viewsets

import json
from django.http.multipartparser import MultiPartParser

from .serializers import ProductSerializer, ReviewSerializer

from .models import Product, Review
from django.http import QueryDict
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
        print(request.session.get('decoded_user', None))
        print(request.COOKIES)
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class Review_view(GenericAPIView, CreateModelMixin, ListModelMixin):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)