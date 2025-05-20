from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.hashers import make_password
from .models import CustomUser
from .token import send_email_for_verification

class UserSignupSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    location = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=255)
    confirm_password = serializers.CharField(max_length=255)

    def validate(self, data):
        if CustomUser.objects.filter(username=data['username']).exists():
            raise serializers.ValidationError({'username': 'username has been taken'})
        if CustomUser.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError({'email': 'email already exists'})
        if len(data['password']) < 8 or len(data['confirm_password']) < 8:
            raise serializers.ValidationError({'password length': 'password must be more than 8 characters'})
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({'password':'password do not match'})
        data.pop('confirm_password')
        print(data)
        return data
    
    def create(self, validated_data):
        print(validated_data)
        username = validated_data.get("username")
        email = validated_data.get("email")
        location = validated_data.get("location")
        password = validated_data.get("password")
        try:
            if not CustomUser.objects.filter(email=email).exists():
                user = CustomUser.objects.create_user(username=username, email=email, location=location, role="user", password=password)
        except Exception as e:
            print(e)
            raise serializers.ValidationError({'error': "email or username already exist"})
        if not send_email_for_verification(user=email):
            raise serializers.ValidationError({'error': 'error while sending email'})
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'})

    def validate(self, data):
        email = data['email']
        try:
            user = CustomUser.objects.get(email=email)
            Token.objects.filter(user=user).delete()
            user.token_valid = False
            user.save()
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError({'error': 'email or password is incorrect'})
        except CustomUser.MultipleObjectsReturned:
            raise serializers.ValidationError({'error': 'multiple account found for this email'})
        except Exception as e:
            print(e)
            raise serializers.ValidationError({'error': 'an error occurred when checking email'}) 
        return data