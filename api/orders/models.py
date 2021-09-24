from django.db import models
from carts.models import Cart
from users.models import User

# Create your models here.
class Order(models.Model):
    cartID = models.ForeignKey(Cart,on_delete=models.CASCADE)
    userID = models.ForeignKey(User,on_delete=models.CASCADE)
    paid = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)
    date_of_order = models.DateField(auto_now_add=True)