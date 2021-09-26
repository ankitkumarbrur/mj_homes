from django.db import models
from carts.models import Cart
from users.models import User

# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    paid = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)
    date_of_order = models.DateField(auto_now_add=True)
    total_amount = models.FloatField(blank=True, null=True)


class OrderDetails(models.Model):
    cart = models.ForeignKey(Order, on_delete = models.CASCADE)