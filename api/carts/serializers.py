from rest_framework import serializers
from .models import *
from products.models import ProductVariation, Product
from products.serializers import VariationSerializer, ProductSerializer
from django.core.exceptions import ValidationError

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
        extra_kwargs = {
            'user' : {"read_only": True}
        }

    def to_representation(self, instance):
        data = super(CartSerializer, self).to_representation(instance)
        variation = ProductVariation.objects.get(id = data['product'])
        variation = VariationSerializer(instance = variation).data
        data['product'] = variation['product']
        product = Product.objects.get(id = variation['product'])
        product = ProductSerializer(instance = product).data
        product.pop('review', None)
        product.pop('variation', None)
        product.pop('id', None)
        product.pop('model3d', None)
        product.pop('image', None)
        variation.update(product)
        data['variation'] = variation
        return data


    def create(self, validated_data, *args, **kwargs):
        try:
            validated_data['user'] = self.context['request'].user
            product = Cart.objects.filter(user = validated_data['user'], product = validated_data['product'])

            if len(product):
                return product[0]
            else:
                validated_data['quantity'] = validated_data.get('quantity', 1)

                if validated_data['quantity'] <= 0:
                    raise serializers.ValidationError({"detail": "Quantity can't be negative or zero"})

                cart = Cart.objects.create( **validated_data)
                return cart

        except ValidationError:
            raise serializers.ValidationError({"detail": "input is not valid"})

    def update(self, instance, validated_data):
        quantity = validated_data.get('quantity', 1)

        if quantity <= 0:
            raise serializers.ValidationError({"detail": "Quantity can't be negative or zero"})

        instance.quantity = quantity
        return instance

class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = '__all__'
        extra_kwargs = {
            'user' : {"read_only": True}
        }

    def to_representation(self, instance):
        data = super(WishlistSerializer, self).to_representation(instance)
        product = Product.objects.get(id = data['product'])
        product = ProductSerializer(instance = product).data
        product.pop('review', None)
        product.pop('variation', None)
        product.pop('id', None)
        product.pop('model3d', None)
        data.update(product)
        return data

    def create(self, validated_data, *args, **kwargs):
        try:
            validated_data['user'] = self.context['request'].user
            product = WishList.objects.filter(user = validated_data['user'], product = validated_data['product'])

            if len(product) == 0:
                wishlist = WishList.objects.create( **validated_data)
                return wishlist

        except ValidationError:
            raise serializers.ValidationError({"detail": "input is not valid"})

    def update(self, instance, validated_data):
        return instance

class CouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupon
        fields = '__all__'
