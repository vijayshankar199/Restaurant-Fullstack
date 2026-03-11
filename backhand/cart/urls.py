from django.urls import path
from . import views

urlpatterns = [
    path("cartdata/",views.Cartdata.as_view()),
    path("getdata/",views.Getdata.as_view()),
    path("postdata/",views.Postdata.as_view()),
    path("deletedata/<int:id>/",views.Deletedata.as_view()),
    path("usercartitem/<int:id>",views.Usercartitem.as_view()),
    path("usercart/<int:id>",views.Usercart.as_view()),
    path("usercartdelete/<int:id>/",views.Usercartdelete.as_view()),
]
