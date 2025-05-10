from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import CustomUser
from api.tasks import send_verification_email

class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    location = serializers.CharField(max_length=255)
    password = serializers.CharField(write_only=True, max_length=255)
    confirm_password = serializers.CharField(write_only=True, max_length=255)

    def validate(self, data):
        if CustomUser.objects.filter(username=data['username']).exists():
            raise serializers.ValidationError({'username': 'username has been taken'})
        if CustomUser.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError({'email': 'email already exists'})
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({'password':'password do not match.'})
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
            user = CustomUser.objects.create_user(username=username, email=email, location=location, role="user", password=make_password(password))
            send_verification_email.delay(email=email)
        except Exception as e:
            print(e)
            raise serializers.ValidationError({'error': "email or username already exist"})
        return user

# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField(required=True)
#     password = serializers.CharField(required=True, style={'input_type': 'password'})