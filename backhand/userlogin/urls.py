from django.urls import path
from . import views

urlpatterns = [
    path('getdata/',views.Getdata.as_view()),
    path('postdata/',views.Postdata.as_view()),
    path('menu/getdata/',views.Menu_Getdata.as_view()),
]
