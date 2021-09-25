from rest_framework import serializers
from .models import Cart, CartItem, WishList, WishListItem

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(read_only = False)
    class Meta:
        model = Cart
        fields = '__all__'

class WishlistItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishListItem
        fields = '__all__'
class WishlistSerializer(serializers.ModelSerializer):
    wishlist_items = CartItemSerializer(read_only = False)
    class Meta:
        model = WishList
        fields = '__all__'