from django.contrib import admin

# Register your models here.
from .models import Cart, WishList, Coupon

admin.site.register(Cart)
admin.site.register(Coupon)
admin.site.register(WishList)