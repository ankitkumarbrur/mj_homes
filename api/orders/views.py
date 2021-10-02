from .models import Order
from users.models import User
from rest_framework import viewsets
from .serializers import CartSerializer


class OrderView(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = CartSerializer