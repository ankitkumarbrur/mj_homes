from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import MyTokenObtainPairView, MyTokenRefreshView, BlacklistTokenView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name = 'token_obtain_pair'),
    path("logout/", BlacklistTokenView.as_view(), name = "blacklist"),
    # path("register/", BlacklistTokenView.as_view(), name = "blacklist"),
    path('refresh/', MyTokenRefreshView.as_view(), name = 'token_refresh'),
]
