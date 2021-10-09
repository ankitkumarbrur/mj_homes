from django.db import models

from products.models import ProductVariation, Product
from users.models import User

# Create your models here.
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    product = models.ForeignKey(ProductVariation, on_delete = models.CASCADE)
    quantity = models.IntegerField(default = 1, null = False, blank = False)

    def __str__(self):
        return self.user.user_name

class WishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete = models.CASCADE)

    def __str__(self):
        return self.user.user_name