from .models import WishList
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import CartView, WishListView

router = DefaultRouter()

router.register('cart', CartView, basename = "cart")


urlpatterns = [
    # path('cart/', CartView.as_view(), name = 'cartList'),
    # path('cart/<int:pk>', CartView.as_view(), name = 'cartList'),
    path('', include(router.urls)),
    path('wishlist/',WishListView.as_view(),name = 'wishlist')
]
