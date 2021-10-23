from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
import jwt, datetime

from users.models import User
from users.serializers import UserSerializer

from django.core.mail import send_mail

# Create your views here.

class reset_password_view(APIView):
    secret = "secret"

    def post(self, request):     
        if request.data.get("email", None):

            user = User.objects.filter(email = request.data.get("email"))[0]

            if user :
                payload = {
                    "id" : user.id,
                    'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes = 60),
                    'iat' : datetime.datetime.utcnow()
                }
                token = jwt.encode(payload, self.secret, algorithm = "HS256")

                send_mail("Reset Password",
                "click on the following url to reset your password: luxurymjhomes.com/" + token,
                "admin@luxurymjhomes.com",[request.data.get("email")])

                return Response({"success":"200", "token" : token})
            else:
                return Response({"email": "no matching user found for specified email"})
        else:
            return Response({"email":"no email specified"})
    
    def patch(self, request):     
        if request.data.get("token", None):

            if request.data.get("password", None):
                payload = jwt.decode(request.data.get("token"), self.secret, algorithms = ["HS256"])
                user = User.objects.filter(id = payload["id"])[0]

                serializer = UserSerializer(user, data = request.data, partial = True)
                serializer.is_valid(raise_exception = True)
                serializer.save()

                return Response({"status": 200})
            else:
                return Response({"message": "no password provided"})
        else:
            return Response({"status": 403, "message": "invaild link"})