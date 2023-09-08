from django.contrib import admin
from django.urls import path,include
from disaster_app import views

urlpatterns = [
    path('',views.signup,name="signup"),
    path('home/',views.home,name='home'),
     path('disaster_list/',views.disaster_list,name='disaster_list'),
    path('getVillage/',views.getVillage,name='getVillage'),
    path('load_taluka/',views.load_taluka,name='load_taluka'),
   
]