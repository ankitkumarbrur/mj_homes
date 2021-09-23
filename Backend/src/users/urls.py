from django.urls import path, include
from .views import User_view, BlacklistTokenView, Address_view

urlpatterns = [
    path("", User_view.as_view(), name = "userlist"),
    path("logout/", BlacklistTokenView.as_view(), name = "blacklist"),
    path("address/", Address_view.as_view(), name = "address")
]