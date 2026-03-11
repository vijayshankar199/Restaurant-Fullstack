from rest_framework.serializers import ModelSerializer,PrimaryKeyRelatedField
from .models import Cart, CartItem
from owner.models import menu
from owner.serializer import menuser
from userlogin.serialzer import userser
from userlogin.models import user


class CartSerializer(ModelSerializer):
    
    user = userser()

    class Meta:
        model = Cart
        fields = ["id", "user", "total_amount","date"]

class usercartser(ModelSerializer):
    class Meta:
        model=Cart
        fields="__all__"





class CartItemSerializer(ModelSerializer):
    menu = menuser()
    cart=CartSerializer()   
    class Meta:
        model = CartItem
        fields = "__all__"



class CartItempostSerializer(ModelSerializer):
    
    cart = PrimaryKeyRelatedField(
        queryset=Cart.objects.all()
    )

    menu = PrimaryKeyRelatedField(
        queryset=menu.objects.all()
    )

    class Meta:
        model = CartItem
        fields = ["id", "cart", "menu", "quantity", "subtotal","date"]







# {
#   "id": 1,
#   "user": 1,
#   "total_amount": 400,
#   "items": [
#     {
#       "id": 1,
#       "menu": {
#         "id": 2,
#         "name": "Pizza",
#         "price": 200
#       },
#       "quantity": 2,
#       "subtotal": 400
# pip install -r requirements.txt