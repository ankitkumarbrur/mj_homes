from django.db import models

from products.models import Product
from users.models import User

# Create your models here.
class Cart(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    total_amount = models.FloatField(blank=True, null=True)

class CartItem(models.Model):
    productId = models.ForeignKey(Product, on_delete = models.CASCADE)
    cartID = models.ForeignKey(Cart, on_delete = models.CASCADE)
    quantity = models.IntegerField(null = False, blank = False)