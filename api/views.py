from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .serializer import UserSignupSerializer, LoginSerializer
from .models import CustomUser, EmailOTP
from .token import decode_token

class RegisterView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]
    
    def post(self, request, *args, **kwargs):
        if len(request.data) < 5 or len(request.data) > 5:
            return Response(data={'info': 'only "username", "email", "location", "password", "confirm_password" fields are allowed'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = UserSignupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data={'info': 'check your email to complete verification'}, status=status.HTTP_202_ACCEPTED)
    
@api_view(['GET'])
@authentication_classes([])
@permission_classes([AllowAny])
def verify_email(request):
    token_entered = request.query_params.get('token')
    if not token_entered:
        return Response(data={'error': 'Token is missing'}, status=status.HTTP_400_BAD_REQUEST)
    token = decode_token(token_entered)
    if not token:
        return Response(data={'error': 'Token is invalid or has expired'}, status=status.HTTP_400_BAD_REQUEST)
    email = token['sub']
    if not email:
        return Response(data={'error': 'token is missing email'}, status=status.HTTP_400_BAD_REQUEST)
    try:
        user = CustomUser.objects.get(email=email)
    except CustomUser.DoesNotExist:
        return Response(data={'error': 'email does not exists!'}, status=status.HTTP_400_BAD_REQUEST)
    except CustomUser.MultipleObjectsReturned:
        return Response(data={'error': 'multiple account found for this email'})
    except Exception as e:
        return Response(data={'error': 'an error occured when verifying the email'})
    if user.email_verified and user.token_valid:
        print("Here 1")
        return Response(data={'error': 'email has been verified before now'}, status=status.HTTP_400_BAD_REQUEST)
    user.email_verified = True
    print("Here 2")
    Token.objects.filter(user=user).delete()
    token = Token.objects.create(user=user)
    user.token_valid = True
    user.save()
    return Response(data=
                    {'data': {
                        'data': user.id,
                        'username': user.username,
                        'email': user.email,
                        'location': user.location,
                        'date_joined': user.date_joined
                        },
                    'token': token.key
                    }, status=status.HTTP_200_OK)
        
class LoginView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')            
            print(email, password)
            user = authenticate(request, username="kolapotemitope472@gmail.com", password="testingbackend")
            print(user)
            if not user:
                return Response(data={'error': 'email or password is incorrect'}, status=status.HTTP_400_BAD_REQUEST)
            if not user.email_verified:
                return Response(data={'error': 'email has not been verified'}, status=status.HTTP_400_BAD_REQUEST)
            get_otp = EmailOTP.objects.create(email=user)
            if get_otp.send_otp():
                return Response(data={'info': 'please check your email for OTP'}, status=status.HTTP_202_ACCEPTED)
            return Response(data={'error': 'an error occured when generating OTP'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)