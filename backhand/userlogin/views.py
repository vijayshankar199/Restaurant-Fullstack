from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED
from .models import user
from .serialzer import userser
from cart.serializers import CartSerializer
from cart.models import Cart

from owner.models import menu
from owner.serializer import menuser

# Create your views here.

class Getdata(APIView):
    def get(self,request):
        e_obj=user.objects.all()
        s_obj=userser(e_obj,many=True)
        return Response(s_obj.data,status=HTTP_200_OK)
        
class Postdata(APIView):
    def post (self,request):
        e_obj=request.data
        s_obj=userser(data=e_obj)  
        if s_obj.is_valid():
            s_obj.save()
            return Response(s_obj.data,status=HTTP_201_CREATED)
        

class Menu_Getdata(APIView):
    def get(self,request):
        e_obj=menu.objects.all()
        s_obj=menuser(e_obj,many=True)
        return Response(s_obj.data,status=HTTP_200_OK)

    