from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from datetime import date


@api_view(['GET'])
def getAllOrders(request):
    orders = Order.objects.all()
    orderDetailList=[]
    try:
        for o in orders:
            odetail = OrderDetails.objects.filter(order_id=o)
            orderList = []
            for od in odetail:
                orderList.append({"product":od.product_product_id.name,"qty":od.qty_ordered})
            orderDetailList.append(
                {
                    "orderId":o.id,
                    "dateOrdered": o.order_date,
                    "deliveryAddress" : o.delivery_address,
                    "orderStatus":o.order_status,
                    "orderedNumber":o.mobile_number,
                    "totalAmount":o.total_amount,                
                    "productList":orderList
                }
            )
        return Response({"orderHistory":orderDetailList},status=200)     
    except:
        pass

@api_view(['POST'])
def changeOrderStatus(request):
    try:
        orderId= request.data["orderId"]
        updateStatus = request.data["status"]
        order = Order.objects.get(id=orderId)
        order.order_status = updateStatus
        order.save()
        return Response({"Message":"The order has been updated successfully"},status=200)
    except Exception as e:
        return Response({"Error":"Have You missed any field i think so.... ==> "+str(e),},status=401)
