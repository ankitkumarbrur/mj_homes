from django.db import models
from users.models import User
from django.utils.text import slugify
import uuid

from PIL import Image as Img
import io as StringIO
from django.core.files.uploadedfile import InMemoryUploadedFile

# Create your models here.
class ProductQuerySet(models.query.QuerySet):
	def active(self):
		return self.filter(active = True)

class ProductManager(models.Manager):
	def get_queryset(self):
		return ProductQuerySet(self.model, using=self._db)

	def all(self, *args, **kwargs):
		return self.get_queryset().active()

def model_upload(instance, filename):
	slug = slugify(instance.name)
	_, file_extension = filename.split(".")
	new_filename = "%s-%s.%s" %(slug, instance.id, file_extension)
	return "products/%s/%s" %(slug, new_filename)

def image_upload(instance, filename):

    slug = slugify(instance.product.name)
    file_extension = filename.split(".")[-1]
    new_filename = "%s-%s.%s" %(slug, instance.id, file_extension)
    return "products/%s/%s" %(slug, new_filename)

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length = 150, null = False, blank = False)

    active = models.BooleanField(default = True)
    new = models.BooleanField(default = True)
    featured = models.BooleanField(default = False)
    bestSeller = models.BooleanField(default = False)

    shortDescription = models.CharField(max_length = 2000)
    description = models.CharField(max_length = 5000)

    subcategory = models.CharField(max_length = 100, null = True)
    keyword = models.TextField(null = True)
    manufacturer = models.CharField(max_length = 100)

    discount = models.IntegerField(default = 0)

    model3d =  models.FileField(upload_to = model_upload, null = True, blank = True)

    addedDate = models.DateField(auto_now_add = True)

    def __str__(self):
        return (self.name)

class ProductVariation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, related_name = "variation", on_delete = models.CASCADE, null = False)
    
    color = models.CharField(max_length = 100)
    material = models.CharField(max_length = 100)
    price = models.FloatField(null = False, blank = False)
    size = models.CharField(max_length = 100, null = True)
    weight = models.FloatField(null = True)
    image = models.ImageField(upload_to = image_upload, null = True, blank = True)

    def __str__(self):
        return  "%s - %s" %(self.product.name, self.id)

class Image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, related_name="image", on_delete = models.CASCADE, null = False, blank = False)
    image = models.ImageField(upload_to = image_upload)

    def __str__(self):
        return "%s - %s" %(self.product.name, self.id)

    def save(self, *args, **kwargs):
        if self.image:
            image_f = Img.open(StringIO.BytesIO(self.image.read()))

            output = StringIO.BytesIO()
            image_f.save(output, format='WEBP', quality=75)
            output.seek(0)

            self.image = InMemoryUploadedFile(output,'ImageField', "%s.webp" %self.image.name, 'image/webp', output.getbuffer().nbytes, None)

        super(Image, self).save(*args, **kwargs)

class Review(models.Model):
    product = models.ForeignKey(Product, related_name="review", on_delete = models.CASCADE, null = False, blank = False)
    user = models.ForeignKey(User, related_name="review", on_delete = models.CASCADE, null = False, blank = False)

    reviewStar = models.FloatField(null = False, blank = False)
    reviewText = models.TextField(null = True, blank = True)
    dateAdded = models.DateField(auto_now_add = True)

    def __str__(self):
        return (self.product.name)
