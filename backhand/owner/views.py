from django.shortcuts import render
from rest_framework.response import Response

from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED,HTTP_202_ACCEPTED
from rest_framework.views import APIView
from .serializer import ownerser,menuser
from .models import owner,menu

# Create your views here.

class Getdata(APIView):
    def get(self,request):
        e_obj=owner.objects.all()
        s_obj=ownerser(e_obj,many=True)
        return Response(s_obj.data,status=HTTP_200_OK)

    
class Postdata(APIView):
    def post (self,request):
        e_obj=request.data
        s_obj=ownerser(data=e_obj)
        if s_obj.is_valid():
            s_obj.save()
            return Response(s_obj.data,status=HTTP_201_CREATED)
        

class Menu_Getdata(APIView):
    def get(self,request):
        e_obj=menu.objects.all()
        s_obj=menuser(e_obj,many=True)
        return Response(s_obj.data,status=HTTP_200_OK)
    
class Menu_Postdata(APIView):
    def post (self,request):
        e_obj=request.data
        s_obj=menuser(data=e_obj)
        if s_obj.is_valid():
            s_obj.save()
            return Response(s_obj.data,status=HTTP_201_CREATED)
        

class Menu_Updatedata(APIView):
    def get(self,request,id):
        e_obj=menu.objects.get(id=id)
        s_obj=menuser(e_obj)
        return Response(s_obj.data,status=HTTP_200_OK)
    def put(self,request,id):
        e_obj=menu.objects.get(id=id)
        s_obj=menuser(e_obj,data=request.data)
        if s_obj.is_valid():
            s_obj.save()
            return Response(s_obj.data,status=HTTP_202_ACCEPTED)
        
class Menu_Deletedata(APIView):
    def get(self,request,id):
        e_obj=menu.objects.get(id=id)
        s_obj=menuser(e_obj)
        return Response(s_obj.data,status=HTTP_200_OK)
    def delete(self,request,id):
        e_obj=menu.objects.get(id=id)
        e_obj.delete()
        return Response({"message": "Menu deleted successfully"}, status=HTTP_200_OK)
        



