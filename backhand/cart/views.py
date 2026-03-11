from django.shortcuts import render,get_object_or_404
from rest_framework.response import Response

from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED,HTTP_202_ACCEPTED,HTTP_404_NOT_FOUND
from rest_framework.views import APIView

from .models import Cart,CartItem,update_cart_total
from .serializers import CartItemSerializer,CartSerializer,usercartser,CartItempostSerializer
from owner.models import menu
from django.utils import timezone

from django.db.models import Q
# Create your views here.


class Cartdata(APIView):
    def get(self,request):
        e_obj=Cart.objects.all()
        s_obj=CartSerializer(e_obj,many=True)
        return Response(s_obj.data,status=HTTP_200_OK)
    def post(self,request):
        e_obj=request.data
        s_obj=usercartser(data=e_obj)
        if s_obj.is_valid():
            s_obj.save()
            return Response(s_obj.data,status=HTTP_201_CREATED)
  

class Getdata(APIView):
    def get(self, request):
        
        items = CartItem.objects.all()
        print(items)
        s_obj=CartItemSerializer(items,many=True)
        return Response(s_obj.data, status=HTTP_200_OK)


class Postdata(APIView):
    def post(self, request):
        serializer = CartItempostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class Deletedata(APIView):
    def get(self,request,id):
        e_obj=CartItem.objects.get(id=id)
        s_obj=CartItemSerializer(e_obj)
        return Response(s_obj.data,status=HTTP_200_OK)
    def delete(self,request,id):
        e_obj=CartItem.objects.get(id=id)
        e_obj.delete()
        return Response({"data deleted"},status=HTTP_404_NOT_FOUND)
    
class Usercartitem(APIView): 
    def get(self,request,id):
        today = timezone.now().date()
        e_obj = CartItem.objects.filter(Q(cart_id=id) & Q(date=today))
        print(e_obj)
        s_obj=CartItemSerializer(e_obj,many=True)
        return Response(s_obj.data,status=HTTP_200_OK)

class  Usercart(APIView): 
    def get(self,request,id):
        today = timezone.now().date()
        e_obj = Cart.objects.filter(Q(id=id) & Q(date=today))
        print(e_obj)
        s_obj=CartSerializer(e_obj,many=True)
        return Response(s_obj.data,status=HTTP_200_OK)
    
class Usercartdelete(APIView):
    def get(self,request,id):
        e_obj=Cart.objects.get(id=id)
        s_obj=CartSerializer(e_obj)
        return Response(s_obj.data,status=HTTP_200_OK)
    def delete(self,request,id):
        e_obj=Cart.objects.get(id=id)
        e_obj.delete()
        return Response({"data deletes"},status=HTTP_404_NOT_FOUND)


