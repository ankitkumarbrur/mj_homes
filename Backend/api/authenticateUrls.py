from django.urls import path
from . import authenticationViews

urlpatterns = [
    path("login/",authenticationViews.apilogin,name="login"),
    path("signup/",authenticationViews.apisignup,name="signup")
    
]
