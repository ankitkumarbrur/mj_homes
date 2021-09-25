from django.db.models import fields
# from django.contrib.auth.models import Use
from django.core.exceptions import ValidationError
from .models import User, Address
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    user_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'user_name', 'password')
        extra_kwargs = {
            'password': {'write_only': True},
            'wishlist': {'read_only':True},
            'active_cart': {'read_only':True},
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)

        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            
        instance.save()
        return instance

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

    def to_representation(self, instance):
        data = super(AddressSerializer, self).to_representation(instance)
        return data 

    def create(self, validated_data):
        try:
            print(validated_data)
            address = Address.objects.create( **validated_data)
        except ValidationError as ex:
            raise serializers.ValidationError({"detail": "input is not valid"})
        return address