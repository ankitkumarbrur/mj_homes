from django.urls import path, include
from .views import User_view, Address_view

urlpatterns = [
    path("", User_view.as_view(), name = "userlist"),
    path("address/", Address_view.as_view(), name = "address")
]