from django.db import models
from django.db.models.expressions import OrderBy
from .accountModels import *




# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self) -> str:
        return self.name

class SubCategory(models.Model):
    name = models.CharField(max_length=20)
    categoryId = models.ForeignKey(Category,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name+" --> "+self.categoryId.name

class Manufacturer(models.Model):
    name = models.CharField(max_length=20)
    email  = models.CharField(max_length=150)

    def __str__(self) -> str:
        return self.name

# class Size(models.Model):
#     sizeName = models.CharField(max_length=10)
#     sizeValue = models.FloatField()

#     def __str__(self) -> str:
#         return self.sizeName

class Color(models.Model):
    color   = models.CharField(max_length=20)

    def __str__(self) -> str:
        return self.color

class Material(models.Model):
    material = models.CharField(max_length=70)

    def __str__(self) -> str:
        return self.material

class Product(models.Model):
    name = models.CharField(max_length=25)
    shortDescription = models.CharField(max_length=2000)
    description = models.CharField(max_length=5000)
    careInstruction = models.CharField(max_length=1000)#TODO: it might affect in the frontend as the value should be in new line
    keyword = models.CharField(max_length=1000,null=True)
    size = models.CharField(max_length=100,null=True)
    weight = models.CharField(max_length=100,null=True)
    price = models.FloatField(default=0.0)
    sellingPrice = models.FloatField(default=0.0)
    subcategory = models.ForeignKey(SubCategory,on_delete=models.CASCADE,null=True)
    color= models.ForeignKey(Color,on_delete=models.CASCADE,null=True)
    material = models.ForeignKey(Material,on_delete=models.CASCADE,null=True)
    manufacturer = models.ForeignKey(Manufacturer,on_delete=models.CASCADE,null=True)
    featured = models.BooleanField(default=False)
    newProduct = models.BooleanField(default=False)
    bestSeller = models.BooleanField(default=False)

    addedDate = models.DateField(auto_now_add=True)
    modelFile = models.CharField(max_length=1000)
    discount = models.IntegerField(default=0)

    def __str__(self) -> str:
        return self.name+" --> "+str(self.id)+" --> "+self.subcategory.name


class Image(models.Model):
    # image = models.ImageField(upload_to='products')
    imageLink = models.URLField(max_length=1000)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,null=False)

    def __str__(self):
        return self.product.name+" --> "+str(self.id)+" --> "+self.product.subcategory.name

class Model3D(models.Model):
    modelFile =  models.FileField()
    product = models.ForeignKey(Product,on_delete=models.CASCADE,null=False)

    

class Offer(models.Model):
    offerPrice = models.FloatField()
    saleStartDate = models.DateField()
    saleEndDate = models.DateField()
    productCondition = models.CharField(max_length=700)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,null=False)

    def __str__(self) -> str:
        return self.productCondition

class Review(models.Model):
    reviewText = models.CharField(max_length=1000)
    reviewStar= models.IntegerField(max_length=5)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,null=False)
    reviewedBy =models.ForeignKey(Customer,on_delete=models.CASCADE,null=False)

    def __str__(self) -> str:
        return self.reviewText

class ProductVariation(models.Model):
    price = models.FloatField()
    product = models.ForeignKey(Product,on_delete=models.CASCADE,null=False)
    color= models.ForeignKey(Color,on_delete=models.CASCADE,null=False)
    material = models.ForeignKey(Material,on_delete=models.CASCADE,null=False)

class ProductVariationImage(models.Model):
    image = models.ImageField()
    product = models.ForeignKey(ProductVariation,on_delete=models.CASCADE,null=False)

class ProductFeature(models.Model):
    featureName = models.CharField(max_length=100)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,null=False)


class Cart(models.Model):
    productId = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    customerId = models.ForeignKey(Customer, on_delete=models.CASCADE)

class Order(models.Model):
    # order_id = models.IntegerField(primary_key=True)
    order_date = models.DateField(blank=True, null=True)
    delivery_address = models.CharField(max_length=300, blank=True, null=True)
    order_status = models.CharField(max_length=10, blank=True, null=True)
    customer_customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE, null=False)
    mobile_number = models.CharField(max_length=15, blank=True, null=True)
    total_amount = models.FloatField(blank=True, null=True)

    def __str__(self):
        return self.mobile_number


class OrderDetails(models.Model):
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE, null=False)
    qty_ordered = models.IntegerField(blank=True, null=True)
    product_product_id = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    product_variation_id = models.ForeignKey(ProductVariation, on_delete=models.CASCADE,null=True)

    def __str__(self):
        return str(self.total_amount)


class Transaction(models.Model):
    transactionId = models.IntegerField()
    amount  = models.FloatField(blank=True, null=True)
    customerId = models.ForeignKey(Customer, on_delete=models.CASCADE)