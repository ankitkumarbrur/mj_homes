from django.urls import path,include
from . import views

urlpatterns = [
    path("products/",views.getProducts,name="productList"),
    path("productDetail/",views.getSpecificProducts,name="productDetail"),
    path("getcategory/",views.getCategory,name="getCategory"),
    path("getcatproduct/",views.getCategoryProduct,name="getCatProduct"),
    path("search/",views.searchProduct,name="searchProduct"),
    #path for the authenticaion part :
    path("authenticate/",include("api.authenticateUrls")),
    path("order/",include("api.orderFlowUrls")),
    path("admin/",include("api.adminPanelUrls"))
]
