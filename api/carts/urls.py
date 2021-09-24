from .models import WishList
from django.urls import path

from .views import CartView,WishListView

urlpatterns = [
    path('cart/', CartView.as_view(), name = 'cartList'),
    path('cart/<int:pk>', CartView.as_view(), name = 'cartList'),
    path('wishlist/',WishListView.as_view(),name = 'wishlist')
]
