from django.db import models

from products.models import Product
from users.models import User

# Create your models here.
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    total_amount = models.FloatField(blank=True, null=True)

class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete = models.CASCADE)
    quantity = models.IntegerField(null = False, blank = False)

class WishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class WishListItem(models.Model):
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    wishlist = models.ForeignKey(WishList, on_delete = models.CASCADE)