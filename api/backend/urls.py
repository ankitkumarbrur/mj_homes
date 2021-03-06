"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from orders.views import OrderView
from carts.views import CartView, WishListView, CouponView
from users.views import Address_view, User_view, Subscribe_view, Query_view, Pincode_view
from products.views import Review_view, Product_view, Review_view, Variation_view, Image_view
from homepage.views import Carousel_View, DOTD_view, Homepage_view, Blog_view

"""
Router HTTP Request mapping to methods

    {prefix}/
        - GET   -> list()
        - POST  -> create()

    {prefix}/<int:pk>/
        - GET    -> retrieve()
        - PUT    -> update()
        - PATCH  -> partial_update()
        - DELETE -> destroy()
"""

router = DefaultRouter()

router.register('cart', CartView, basename = "cart")
router.register('wishlist', WishListView, basename = "wishlist")
router.register('order', OrderView, basename= 'order')
router.register('address', Address_view, basename= 'address')
router.register('user', User_view, basename= 'user')
router.register('product', Product_view, basename= 'product')
router.register('review', Review_view, basename= 'review')
router.register('variation', Variation_view, basename= 'variation')
router.register('image', Image_view, basename= 'image')
router.register('subscribe', Subscribe_view, basename= 'suscribe')
router.register('dotd', DOTD_view, basename= 'DOTD')
router.register('homepage', Homepage_view, basename= 'homepage')
router.register('blog', Blog_view, basename= 'blog')
router.register('query', Query_view, basename= 'query')
router.register('coupon', CouponView, basename= 'coupon')
router.register('carousel', Carousel_View, basename= 'carousel')
router.register('pincode', Pincode_view, basename= 'pincode')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authentication.urls')),
    path('users/', include('users.urls')),


    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
