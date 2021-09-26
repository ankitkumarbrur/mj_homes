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
from carts.views import CartView, WishListView
from users.views import Address_view, User_view
from products.views import Review_view

router = DefaultRouter()

router.register('cart', CartView, basename = "cart")
router.register('wishlist', WishListView, basename = "wishlist")
router.register('order', OrderView, basename= 'order')
router.register('address', Address_view, basename= 'address')
router.register('users', User_view, basename= 'users')
router.register('review', Review_view, basename= 'review')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/',include('products.urls')),
    path('', include('authentication.urls')),
    path('users/', include('users.urls')),
    path('', include(router.urls)),
] + static(settings.MEDIA_URL,document_root= settings.MEDIA_ROOT)
