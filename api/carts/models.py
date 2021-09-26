from django.db import models

from products.models import Product
from users.models import User

# Create your models here.
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)

    def __str__(self):
        return self.user.user_name

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name = "cartitems", on_delete = models.CASCADE)
    product = models.ForeignKey(Product, on_delete = models.CASCADE)

    quantity = models.IntegerField(null = False, blank = False)

class WishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.user_name

class WishListItem(models.Model):
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    wishlist = models.ForeignKey(WishList, related_name = "wishlistitems", on_delete = models.CASCADE)