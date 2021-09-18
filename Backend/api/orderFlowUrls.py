from django.urls import path
from . import orderFlowViews

urlpatterns = [
    path("addToCart/",orderFlowViews.addToCart,name="addToCart"),
    path("getCartProducts/",orderFlowViews.getCartProducts,name="getCartProducts"),
    path("placeOrder/",orderFlowViews.placeOrder,name="placeOrder"),
    path("orderHistory/",orderFlowViews.getOrderHistory,name="orderHistory"),
    path("updatecart/",orderFlowViews.updateCartItem,name="updatecart"),
    path("deletecart/",orderFlowViews.deleteCartItem,name="deletecart"),

    
]
