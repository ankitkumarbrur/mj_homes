from rest_framework import serializers, status

from django.core.exceptions import ValidationError
from django.shortcuts import get_object_or_404

from .models import *
from users.models import User
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
        return data

    def create(self, validated_data, *args, **kwargs):
        try:
            validated_data['user'] = self.context['request'].user

            review = Review.objects.create( **validated_data)
        except ValidationError:
            raise serializers.ValidationError({"detail": "input is not valid"})

        return review
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

    def to_representation(self, instance):
        data = super(ImageSerializer, self).to_representation(instance)
        return data

class VariationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductVariation    
        fields = '__all__'

    def to_representation(self, instance):
        data = super(VariationSerializer, self).to_representation(instance)
        discounted_price = (Product.objects.get(id = data['product']).discount/100) * data['price'] + data['price']
        data['discounted_price'] = discounted_price
        data['gstPrice'] = discounted_price * 0.18 + discounted_price
        return data

class ProductSerializer(serializers.ModelSerializer):
    review = ReviewSerializer(many = True, read_only = True)
    variations = VariationSerializer(many = True, read_only = True)
    image = ImageSerializer(many = True, read_only = True)

    class Meta:
        model = Product
        fields =  '__all__'
    
    def to_representation(self, instance):
        data = super(ProductSerializer, self).to_representation(instance)
        data['image'] = [img['image'] for img in data['image']]
        data['subcategory'] = list( i.strip() for i in str(data['subcategory']).split(',')) if data['subcategory'] else list()
        return data