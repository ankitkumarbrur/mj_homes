from django.db import models
from products.models import Product
from django.core.validators import MaxValueValidator, MinValueValidator


[
  {
    "id": 1,
    "title": "Furniture <br /> Collection <span>2021</span>",
    "subtitle": "Sale up to <span>40% off</span>",
    "image": "/assets/img/slider/slider_1.jpg",
    "url": "/shop-grid-standard"
  },
  {
    "id": 2,
    "title": "Furniture <br /> Collection <span>2021</span>",
    "subtitle": "Sale up to <span>30% off</span>",
    "image": "/assets/img/slider/slider_2.jpg",
    "url": "/shop-grid-standard"
  }
]


def image_upload(instance, filename):
    new_filename = "%s.%s" %(instance.id, filename.split(".")[-1])
    return "carousel/%s" %(new_filename)

# Create your models here.
class Carousel(models.Model):
    title = models.CharField(max_length = 100)
    subtitle = models.CharField(max_length = 100)
    image = models.ImageField(upload_to = image_upload)

    def __str__(self):
        return self.title

    
class DOTD(models.Model):
    product = models.ForeignKey(Product, related_name = "DOTD", on_delete = models.CASCADE, null = False, blank = False)
    addedDate = models.DateField(auto_now_add = True)

    def __str__(self):
        return (self.product.name)
