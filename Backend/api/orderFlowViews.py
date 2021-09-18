from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from datetime import date

@api_view(['POST'])
def addToCart(request):
    try:
        userId = request.data["userId"]
        productId = request.data["productId"]
        quantity = request.data["quantity"]
        user = User.objects.get(id=userId)
        product = Product.objects.get(id=productId)
        customer = Customer.objects.get(userId=user)
        cart =  Cart()
        cart.productId = product
        cart.quantity = quantity
        cart.customerId = customer
        cart.save()
        return Response({"message":"Added items to cart"},status=200)
    except Exception as e:
        return Response({"Error":"Have You missed any field i think so.... ==> "+str(e),},status=401)

@api_view(['POST'])
def getCartProducts(request):
    try:
        userId = request.data["userId"]
        user = User.objects.get(id=userId)
        customer = Customer.objects.get(userId=user)
        cart = Cart.objects.filter(customerId=customer)
        cartList = CartSerializer(cart,many=True)
        return Response({"cartList":cartList.data},status=200)
    except Exception as e:
        return Response({"Error":"Have You missed any field i think so.... ==> "+str(e),},status=401)


@api_view(['POST'])
def updateCartItem(request):
    try:
        cartId = request.data["cartId"]
        quantity = request.data["quantity"]
        cart = Cart.objects.get(id = cartId)
        cart.quantity = quantity
        cart.save()
        return Response({"message":"Cart Items updated"},status=200)
    except Exception as e:
        return Response({"Error":"Have You missed any field i think so.... ==> "+str(e),},status=401)


@api_view(['POST'])
def deleteCartItem(request):
    try:
        cartId = request.data["cartId"]
        cart = Cart.objects.get(id = cartId)
        cart.delete()
        return Response({"message":"Cart Item delete"},status=200)
    except Exception as e:
        return Response({"Error":"Have You missed any field i think so.... ==> "+str(e),},status=401)

@api_view(['POST'])
def placeOrder(request):
    try:
        userId = request.data["userId"]
        user = User.objects.get(id=userId)
        orderTab = Order()
        orderTab.order_date = date.today()
        orderTab.delivery_address =  request.data["address"]
        orderTab.order_status ="Started"
        orderTab.customer_customer_id =Customer.objects.get(userId=user)
        orderTab.mobile_number = request.data["contact"]
        orderTab.total_amount=request.data["totalAmount"]
        orderTab.save()
        OrderDetail = OrderDetails()
        OrderDetail.order_id = orderTab
        OrderDetail.qty_ordered = request.data["qty_ordered"]
        
        try:
            prodId = request.data["prodId"]
            OrderDetail.product_product_id = Product.objects.get(id=prodId) 
        except:
            pass
        try:
            prodVarId = request.data["prodVariationId"]
            OrderDetail.product_variation_id = ProductVariation.objects.get(id=prodVarId)
        except:
            pass
        OrderDetail.save()
        return Response({"Message":"The order is placed successfully"},status=200)
    except Exception as e:
        return Response({"Error":"Have You missed any field i think so.... ==> "+str(e),},status=401)


@api_view(['get'])
def getOrderHistory(request):

    userId = request.data["userId"]
    userName = User.objects.get(id=userId)
    user = Customer.objects.get(userId=userName)
    order = Order.objects.filter(customer_customer_id=user)
    orderDetailList = []
    try:
        for o in order:
            odetail = OrderDetails.objects.filter(order_id=o)
            orderList = []
            for od in odetail:
                orderList.append({"product":od.product_product_id.name,"qty":od.qty_ordered})
            orderDetailList.append(
                {
                    "dateOrdered": o.order_date,
                    "deliveryAddress" : o.delivery_address,
                    "orderStatus":o.order_status,
                    "orderedNumber":o.mobile_number,
                    "totalAmount":o.total_amount,                
                    "productList":orderList
                }
            )
        return Response({"orderHistory":orderDetailList},status=200)        
    except Exception as e:
        return Response({"Error":"Have You missed any field i think so....  or else ==> "+str(e),},status=401)

