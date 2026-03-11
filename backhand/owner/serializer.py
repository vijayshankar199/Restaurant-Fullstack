from rest_framework.serializers import ModelSerializer
from .models import owner,menu

class ownerser(ModelSerializer):
    class Meta:
        model=owner
        fields="__all__"

class menuser(ModelSerializer):
    class Meta:
        model=menu
        fields="__all__"



