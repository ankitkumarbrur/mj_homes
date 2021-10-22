from django.db import models
from products.models import Product
from django.core.validators import MaxValueValidator, MinValueValidator

from PIL import Image as Img
import io as StringIO
from django.core.files.uploadedfile import InMemoryUploadedFile

def image_upload(instance, filename):
    new_filename = "%s.%s" %(instance.id, filename.split(".")[-1])
    return "carousel/%s" %(new_filename)

# Create your models here.
class Carousel(models.Model):
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

            self.image = InMemoryUploadedFile(output,'ImageField', "%s.webp" %self.image.name, 'image/webp', output.getbuffer().nbytes, None)

        super(Image, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    
class DOTD(models.Model):
    product = models.ForeignKey(Product, related_name = "DOTD", on_delete = models.CASCADE, null = False, blank = False)
    addedDate = models.DateField(auto_now_add = True)

    def __str__(self):
        return (self.product.name)
