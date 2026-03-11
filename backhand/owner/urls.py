from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView 

from . import views

urlpatterns = [
    path("getdata/",views.Getdata.as_view(),name="getdata"),
    path("postdata/",views.Postdata.as_view(),name="postdata"),
    path("menu/getdata/",views.Menu_Getdata.as_view(),name="menu_getdata"),
    path("menu/postdata/",views.Menu_Postdata.as_view(),name="menu_postdata"),
    path("menu/updatedata/<int:id>/",views.Menu_Updatedata.as_view(),name="menu_updatedata"),
    path("menu/deletedata/<int:id>/",views.Menu_Deletedata.as_view(),name="menu_deletedata"),
    path('login/',TokenObtainPairView.as_view()),
]
