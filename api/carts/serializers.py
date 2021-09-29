from rest_framework import serializers
from .models import Cart, WishList
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
        product.pop('variations', None)
        product.pop('id', None)
        product.pop('model3d', None)
        product.pop('image', None)
        variation.update(product)
        data['variation'] = variation
        return data


    def create(self, validated_data, *args, **kwargs):
        try:
            validated_data['user'] = self.context['request'].user

            cart = Cart.objects.create( **validated_data)
        except ValidationError:
            raise serializers.ValidationError({"detail": "input is not valid"})

        return cart

    # def perform_create(self, serializer):
    #     product = Cart.objects.filter(user = self.request.user, product = serializer.validated_data['product'])
    #     if len(product):
    #         product[0].quantity += serializer.validated_data.get('quantity', 1)
    #         product[0].save()
    #     else:
    #         serializer.save()
class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = '__all__'
        extra_kwargs = {
            'user' : {"read_only": True}
        }

    def to_representation(self, instance):
        data = super(WishlistSerializer, self).to_representation(instance)
        variation = ProductVariation.objects.get(id = data['product'])
        variation = VariationSerializer(instance = variation).data
        data['product'] = variation['product']
        product = Product.objects.get(id = variation['product'])
        product = ProductSerializer(instance = product).data
        product.pop('review', None)
        product.pop('variations', None)
        product.pop('id', None)
        product.pop('model3d', None)
        product.pop('image', None)
        variation.update(product)
        data['variation'] = variation
        return data

    def create(self, validated_data, *args, **kwargs):
        try:
            validated_data['user'] = self.context['request'].user

            wishlist = WishList.objects.create( **validated_data)
        except ValidationError:
            raise serializers.ValidationError({"detail": "input is not valid"})

        return wishlist