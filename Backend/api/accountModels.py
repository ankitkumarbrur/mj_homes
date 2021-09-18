from django.db import models
from django.db.models.expressions import OrderBy
from django.contrib.auth.models import User

class Customer(models.Model):
    address = models.CharField(max_length=1000)
    contactNumber =  models.IntegerField()  
    userId = models.OneToOneField(User,default=False ,on_delete=models.CASCADE,primary_key=True)

    def __str__(self):
        return self.userId.first_name

