from rest_framework.serializers import ModelSerializer
from .models import user


class userser(ModelSerializer):
    class Meta:
        model=user
        fields = ["id", "username", "email", "mobile_no"]
