from rest_framework import serializers
from .models import Band

# like models
class BandSerializer(serializers.ModelSerializer):
    class Meta:
        model=Band
        fields="__all__"


class ErrorSerializer(serializers.Serializer):
    error = serializers.CharField(max_length=200)