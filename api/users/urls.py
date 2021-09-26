from django.urls import path, include
from .views import User_view, Address_view


urlpatterns = [
    # path('', User_view.as_view({
    #     'get':'list',
    #     'post': 'create',
    #     'patch': 'partial_update'
    # }), name = 'userlist'),
    # path('<int:pk>/', User_view.as_view({
    #     'put' : 'update'
    # }), name = 'userlist')
]