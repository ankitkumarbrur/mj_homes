from django.urls import path, include
from .views import Product_view, Review_view

urlpatterns = [
    path("", Product_view.as_view(), name="products"),
    path("review/", Review_view.as_view(), name="reviews"),
]
