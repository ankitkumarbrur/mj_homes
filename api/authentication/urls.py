from django.urls import path

from .views import MyTokenObtainPairView, MyTokenRefreshView, BlacklistTokenView, Force_Logout_View
from users.views import User_view

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name = 'token_obtain_pair'),
    path("logout/", BlacklistTokenView.as_view(), name = "blacklist"),
    path("forcelogout/", Force_Logout_View.as_view(), name = "forcelogout"),
    path("register/", User_view.as_view({'post':'create'}), name = "register"),
    path('refresh/', MyTokenRefreshView.as_view(), name = 'token_refresh'),
]