from django.contrib import admin

# Register your models here.
from .models import Cart, WishList

admin.site.register(Cart)
admin.site.register(WishList)