from django.db import models
from users.models import User
from products.models import ProductVariation

# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    paid = models.BooleanField(default = False)
    delivered = models.BooleanField(default = False)
    cancelled = models.BooleanField(default = False)
    date_of_order = models.DateField(auto_now_add = True)
    total_amount = models.FloatField(blank = True, null = True)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name= 'items', on_delete = models.CASCADE, null = False, blank= False)
    product = models.ForeignKey(ProductVariation, on_delete = models.CASCADE, null = False, blank= False)
    quantity = models.IntegerField(default = 1, null = False)