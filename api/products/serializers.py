from rest_framework import serializers, status

from django.core.exceptions import ValidationError
from django.shortcuts import get_object_or_404

from .models import *
from users.models import User

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['imageLink']

    def to_representation(self, instance):
        return instance.imageLink

class VariationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductVariation
        fields = '__all__'

    def to_representation(self, instance):
        data = super(VariationSerializer, self).to_representation(instance)        
        data.pop('id',None)
        data.pop('product',None)
        data['gstPrice'] = data['price'] * 0.18 + data['price']
        return data

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        ordering = '-dateAdded'
        extra_kwargs = {
            'user': {'read_only' : True},
        }

    def to_representation(self, instance):
        data = super(ReviewSerializer, self).to_representation(instance)

        data['user'] = User.objects.get(id = data['user']).first_name
        data.pop('product', None)
        
        return data

    def create(self, validated_data, *args, **kwargs):
        try:
            if self.context['request'].user.is_authenticated:
                validated_data['user'] = self.context['request'].user
            else:
                raise serializers.ValidationError({"message": "login to post reviews"})

            review = Review.objects.create( **validated_data)
        except ValidationError as ex:
            raise serializers.ValidationError({"detail": "input is not valid"})

        return review

class ProductSerializer(serializers.ModelSerializer):
    review = ReviewSerializer(many = True, read_only = True)
    variations = VariationSerializer(many = True, read_only = True)
    image = ImageSerializer(many = True, read_only = True)

    class Meta:
        model = Product
        fields =  '__all__'
    
    def to_representation(self, instance):
        data = super(ProductSerializer, self).to_representation(instance)
        data['subcategory'] = list(str(data['subcategory']).split(',')) # TODO: Check for "None"
        return data
        
    def create(self, validated_data, *args, **kwargs):
        variations = validated_data.pop('variations', [])
        images = validated_data.pop('image', [])
        
        product = Product.objects.create(**validated_data)

        for variation in variations:
            ProductVariation.objects.create(product = product, **variation)
        
        for image in images:
            Image.objects.create(product=product, **image)
        return product

    def validate(self, attrs):
        if 'variations' in self.initial_data:
            attrs.update({ 'variations': self.initial_data['variations']})
        if 'image' in self.initial_data:
            attrs.update({ 'image': self.initial_data['image']})
        return attrs