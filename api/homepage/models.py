from django.db import models
from products.models import Product
from django.utils.text import slugify
from django.core.validators import MaxValueValidator, MinValueValidator
import uuid


from PIL import Image as Img
import io as StringIO
from django.core.files.uploadedfile import InMemoryUploadedFile

def image_upload(instance, filename):
    new_filename = "%s.%s" %(instance.id, filename.split(".")[-1])
    return "carousel/%s" %(new_filename)

# Create your models here.
class Carousel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length = 100)
    subtitle = models.CharField(max_length = 100)
    image = models.ImageField(upload_to = image_upload)

    # convert jpg to webp
    def save(self, *args, **kwargs):
        if self.image:
            image_f = Img.open(StringIO.BytesIO(self.image.read()))

            output = StringIO.BytesIO()
            image_f.save(output, format='WEBP', quality=75)
            output.seek(0)

            self.image = InMemoryUploadedFile(output,'ImageField', "carousel/%s.webp" % self.image.name, 'image/webp', output.getbuffer().nbytes, None)

        super(Carousel, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    
class DOTD(models.Model):
    product = models.ForeignKey(Product, related_name = "DOTD", on_delete = models.CASCADE, null = False, blank = False)
    addedDate = models.DateField(auto_now_add = True)

    def __str__(self):
        return (self.product.name)



def homeConvertToWebp(image):
    image_f = Img.open(StringIO.BytesIO(image.read()))

    output = StringIO.BytesIO()
    image_f.save(output, format='WEBP', quality=75)
    output.seek(0)

    return InMemoryUploadedFile(output,'ImageField', "home/%s.webp" % image.name, 'image/webp', output.getbuffer().nbytes, None)

class HomepageData(models.Model):
    nameHelper = 0
    def home_image_upload(instance, filename):
        new_filename = "%s-%d.%s" %(instance.id, HomepageData.nameHelper, filename.split(".")[-1])
        HomepageData.nameHelper += 1
        return "home/%s" %(new_filename)
        
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    livingRoom = models.ImageField(upload_to = home_image_upload)
    drawingRoom = models.ImageField(upload_to = home_image_upload)
    diningRoom = models.ImageField(upload_to = home_image_upload)
    kitchen = models.ImageField(upload_to = home_image_upload)
    bedRoom = models.ImageField(upload_to = home_image_upload)
    outdoor = models.ImageField(upload_to = home_image_upload)

    leftImage = models.ImageField(upload_to = home_image_upload)
    rightImage = models.ImageField(upload_to = home_image_upload)

    registerationImage = models.ImageField(upload_to = home_image_upload)

    videoLink = models.TextField()

    def save(self, *args, **kwargs):
        if self.livingRoom: self.livingRoom = homeConvertToWebp(self.livingRoom)
        if self.drawingRoom: self.drawingRoom = homeConvertToWebp(self.drawingRoom)
        if self.diningRoom: self.diningRoom = homeConvertToWebp(self.diningRoom)
        if self.kitchen: self.kitchen = homeConvertToWebp(self.kitchen)
        if self.bedRoom: self.bedRoom = homeConvertToWebp(self.bedRoom)
        if self.outdoor: self.outdoor = homeConvertToWebp(self.outdoor)

        if self.leftImage: self.leftImage = homeConvertToWebp(self.leftImage)
        if self.rightImage: self.rightImage = homeConvertToWebp(self.rightImage)

        if self.registerationImage: self.registerationImage = homeConvertToWebp(self.registerationImage)
        

        super(HomepageData, self).save(*args, **kwargs)
class Blog(models.Model):
    def blog_image_upload(instance, filename):
        new_filename = "%s.%s" %(instance.id, filename.split(".")[-1])
        return "blog/%s" %(new_filename)
        
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    image = models.ImageField(upload_to = blog_image_upload)
    heading = models.TextField()
    link = models.TextField()

    def save(self, *args, **kwargs):
        if self.image:
            image_f = Img.open(StringIO.BytesIO(self.image.read()))

            output = StringIO.BytesIO()
            image_f.save(output, format='WEBP', quality=75)
            output.seek(0)

            self.image = InMemoryUploadedFile(output,'ImageField', "blog/%s.webp" % self.image.name, 'image/webp', output.getbuffer().nbytes, None)

        super(Blog, self).save(*args, **kwargs)