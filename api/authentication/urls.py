from django.urls import path

from .views import MyTokenObtainPairView, MyTokenRefreshView, BlacklistTokenView
from users.views import User_view

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name = 'token_obtain_pair'),
    path("logout/", BlacklistTokenView.as_view(), name = "blacklist"),
    path("register/", User_view.as_view({'post':'create'}), name = "register"),
    path('refresh/', MyTokenRefreshView.as_view(), name = 'token_refresh'),
]
