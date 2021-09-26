from rest_framework import serializers
from .models import Cart, CartItem , WishList, WishListItem

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    cartitems = CartItemSerializer(read_only = False, many=True)
    class Meta:
        model = Cart
        fields = '__all__'

class WishlistItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishListItem
        fields = '__all__'

class WishlistSerializer(serializers.ModelSerializer):
    wishlistitems = WishlistItemSerializer(read_only = True, many=True)
    class Meta:
        model = WishList
        fields = '__all__'
    
    # def create(self, validated_data, *args, **kwargs):
    #     print(validated_data)