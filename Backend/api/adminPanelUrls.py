from django.urls import path
from . import adminPanelViews

urlpatterns = [
 path("getOrders/", adminPanelViews.getAllOrders,name="adminGetAllOrders"),
 path("updateOrderStatus/",adminPanelViews.changeOrderStatus,name="updateOrderStatus")
]
