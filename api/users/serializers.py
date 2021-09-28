from django.core.exceptions import ValidationError
from django.db.utils import IntegrityError
from .models import User, Address
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True, required=True)

    # Determines the structure of User JSON object
    class Meta:
        model = User
        fields = ('email', 'first_name', 'password')
        extra_kwargs = {
            "user_name": {"error_messages": {"required": "Give yourself a username"}},
            'password': {'write_only': True},
            'wishlist': {'read_only':True},
            'active_cart': {'read_only':True},
        }

    # Create a new user 
    # Post request at user_view will be redirected here
    def create(self, validated_data):
        validated_data['user_name'] = validated_data['email']
        password = validated_data.pop('password', None)

        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)

        try:
            instance.save()
            
        except IntegrityError:
            raise serializers.ValidationError({"Error":"Account with same email id exists"})
        return instance

    # def update(self, instance, validated_data):
    #     if
    #         instance.name = validated_data.get('name', instance.name)
    #         instance.password = validated_data.get('created', instance.password)

    #     return instance

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'
        extra_kwargs = {
            'user' : {
                'read_only' : True
            }
        }

    def to_representation(self, instance):
        data = super(AddressSerializer, self).to_representation(instance)
        return data 

    def create(self, validated_data):
        try:
            validated_data['user'] = self.context['request'].user

            address = Address.objects.create( **validated_data)
        except ValidationError as ex:
            raise serializers.ValidationError({"detail": "input is not valid"})
        return address