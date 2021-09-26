from rest_framework.generics import GenericAPIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import permissions, status
from rest_framework.response import Response

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer

# Create your views here.
class BlacklistTokenView(GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            if 'refresh' not in request.data:
                if 'refresh' in request.COOKIES:
                    request.data['refresh'] = request.COOKIES.get('refresh', None)

            refresh_token = request.data["refresh"]

            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response({"message" : "Logout Successful"}, status = 200)
        except Exception as e:
            return Response(status = status.HTTP_400_BAD_REQUEST)


def fetch_and_set_tokens(self, request):                       
    serializer = self.serializer_class(data=request.data)
    serializer.is_valid(raise_exception = True)

    if 'access' in serializer.validated_data and 'refresh' in serializer.validated_data:
        response = Response({"access": serializer.validated_data.get("access", None)}, status = 200)
        # response.set_cookie('access', serializer.validated_data.get("access", None), httponly = True)
        response.set_cookie('refresh', serializer.validated_data.get("refresh", None), httponly = True) #TODO: path='/refresh/'
        return response

    return Response({ "Error": "Something went wrong"}, status = 400)

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny,]
    serializer_class = TokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        return fetch_and_set_tokens(self, request)
        
class MyTokenRefreshView(TokenRefreshView):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = TokenRefreshSerializer

    def post(self, request, *args, **kwargs):
        if 'refresh' not in request.data:
            if 'refresh' in request.COOKIES:
                request.data['refresh'] = request.COOKIES.get('refresh', None)

        return fetch_and_set_tokens(self, request)    