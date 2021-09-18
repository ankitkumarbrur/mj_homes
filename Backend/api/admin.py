from django.contrib import admin
from  .models import *
from .accountModels import *

# Register your models here.
admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Manufacturer)
# admin.site.register(Size)
admin.site.register(Color)
admin.site.register(Material)
admin.site.register(Product)
admin.site.register(Offer)
admin.site.register(Image)
admin.site.register(Model3D)
admin.site.register(Review)
admin.site.register(ProductVariation)
admin.site.register(ProductVariationImage)


#account db
admin.site.register(Customer)

#orderFlowModels
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(OrderDetails)
admin.site.register(Transaction)