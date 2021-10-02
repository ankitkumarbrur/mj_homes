from .models import WishList
from django.urls import path, include


from .views import CartView, WishListView

urlpatterns = [
    path('', CartView.as_view({
        'get'   : 'retrieve',
        'post'  : 'create',
        'delete': 'destroy',
        'put'   : 'update',
        'patch' : 'update'
    }))
]
