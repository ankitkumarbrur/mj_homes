from rest_framework import serializers
from .models import *
from products.models import Product
from products.serializers import ProductSerializer
from products.views import Product_view
class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = '__all__'

class HomepageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomepageData
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'

class DOTDSerializer(serializers.ModelSerializer):
    class Meta:
        model = DOTD
        fields = '__all__'

    def to_representation(self, instance):
        data = super(DOTDSerializer, self).to_representation(instance)
        product = Product.objects.get(id = data['product'])
        
        data['product'] = {
            'id' : ProductSerializer(instance = product).data['id'],
            'image' : ProductSerializer(instance = product).data['image']
        }
        return data
