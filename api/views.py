from rest_framework.views import APIView
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .serializer import RegisterSerializer, LoginSerializer

class RegisterView(APIView):
    authentication_classes = [BasicAuthentication]
    
    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data.get('username')
            email = serializer.validated_data.get('email')
            user_exist = User.objects.filter(username=username).exists()
            email_exist = User.objects.filter(email=email).exists()
            if not user_exist or not email_exist:
                serializer.save()
                user = User.objects.get(email=email)
                token = Token.objects.create(user=user)
                return Response({
                    "message": "User registered successfully.",
                    "token": {
                        token.key
                    }
                }, status=status.HTTP_201_CREATED)
            return Response({'User exist': 'This user already exist!'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class LoginView(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')
            print(email, password)
            return Response({
                
                "user": {
                    "email": email,
                    "password": password
                }
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)