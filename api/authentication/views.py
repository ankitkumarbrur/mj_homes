from django.http import response
from django.shortcuts import render

# Create your views here.
from rest_framework.generics import GenericAPIView
from rest_framework import permissions, status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import MyTokenObtainPairSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer

class BlacklistTokenView(GenericAPIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response(status = status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception = True)

        if 'access' in serializer.validated_data and 'refresh' in serializer.validated_data:
            response = Response({"access": serializer.validated_data.get("access", None)}, status = 200)
            # response = Response(serializer.validated_data, status = 200)
            # ADD secure after embeding with front end
            response.set_cookie('access', serializer.validated_data.get("access", None), httponly = True)
            response.set_cookie('refresh', serializer.validated_data.get("refresh", None), httponly = True, path= '/refresh/')
            return response

        return Response({ "Error": "Something went wrong"}, status = 400)

class MyTokenRefreshView(TokenRefreshView):
    serializer_class = TokenRefreshSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        if 'refresh' not in request.data:
            if 'refresh' in request.COOKIES:
                request.data['refresh'] = request.COOKIES.get('refresh', None)
                        
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception = True)

        if 'access' in serializer.validated_data and 'refresh' in serializer.validated_data:
            response = Response({"access": serializer.validated_data.get("access", None)}, status = 200)
            # response = Response(serializer.validated_data, status = 200)
            # ADD secure after embeding with front end
            response.set_cookie('access', serializer.validated_data.get("access", None), httponly = True)
            response.set_cookie('refresh', serializer.validated_data.get("refresh", None), httponly = True, path= '/refresh/')
            return response

        return Response({ "Error": "Something went wrong"}, status = 400)