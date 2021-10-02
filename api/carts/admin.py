from django.contrib import admin

# Register your models here.
from .models import Cart, WishList, CartItem, WishListItem

admin.site.register(Cart)
admin.site.register(WishList)
admin.site.register(CartItem)
admin.site.register(WishListItem)