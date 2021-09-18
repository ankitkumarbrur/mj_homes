from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from django.views.decorators.csrf import csrf_exempt
from .accountModels import *
from django.contrib.auth import authenticate, login, logout

@api_view(['POST'])
def apilogin(request):
    get = request.body
    try:
        uname = request.data["username"]
        password = request.data["password"]
        user = authenticate(request,username = uname,password=password)
        if user is not None:
            return Response({"message":"Login sucessful","id":user.id},status=201)
    except Exception as e:
        return Response({"Error":"Incorrect username or password "+str(e),},status=401)


@api_view(['POST'])
def apisignup(request):
    try:
        username = request.data["email"]
        password1 = request.data["password1"]
        password2 = request.data["password2"]
        fname = request.data["fname"]
        lname = request.data["lname"]
        address = request.data["address"]
        phoneNumber = request.data["contactNumber"]
        if password1 == password2:
            if User.objects.filter(username=username).exists():
                return Response({"message":"Email is already registered"})
            user = User.objects.create_user(username=username,password=password1)
            user.email= username
            user.first_name = fname
            user.last_name = lname
            user.save()
            try:
                customerUser = Customer()
                customerUser.address = address
                customerUser.contactNumber = phoneNumber
                customerUser.userId = user
                customerUser.save() 
            except Exception as e:
                user.delete()
                return Response({"Error":"Something went worng and the error was ==> "+str(e)},status=401)
            return Response({"message":"User created"},status=201)
        else:
            return Response({"Error":"password is in correct"},status=401)
    except Exception as e:
        return Response({"Error":"Something went worng and the error was ==> "+str(e)},status=401)