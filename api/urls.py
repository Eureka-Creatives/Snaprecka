from django.urls import path
from . import views

urlpatterns = [
    path('v1/signup/', views.RegisterView.as_view()),
    path('v1/login/', views.LoginView.as_view()),
    path('v1/verify-email/', views.verify_email),
    path('v1/verify-otp/', views.verify_otp_code),
    path('v1/logout/', views.LogoutView.as_view()),
]