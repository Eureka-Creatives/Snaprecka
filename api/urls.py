from django.urls import path
from . import views

urlpatterns = [
    path('v1/signin/', views.RegisterView.as_view(), name="sign"),
    # path('login/', views.LoginView.as_view(), name="login")
    # path('v1/verify-email/<u>/<k>/')
]