from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializer import *
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from django.http import JsonResponse




# Create your views here.

class Homeview(generics.CreateAPIView):
    queryset =home.objects.all()
    serializer_class = Homeserializer
    permission_classes =[AllowAny]
    authentication_classes = [SessionAuthentication]
    
    
class Aboutview(generics.CreateAPIView):
    queryset =About.objects.all()
    serializer_class = AboutSerializer
    permission_classes =[AllowAny]
    authentication_classes = [SessionAuthentication,BaseAuthentication]
    
class Projectview(generics.CreateAPIView):
    queryset =Project.objects.all()
    serializer_class =ProjectSerializer
    permission_classes =[AllowAny]
    authentication_classes = [SessionAuthentication,BaseAuthentication]
    
class SkillListview(generics.CreateAPIView):
    queryset =Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes =[AllowAny]
    authentication_classes = [SessionAuthentication,BaseAuthentication]
    
class ContactListview(generics.CreateAPIView):
    queryset =Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes =[AllowAny]
    authentication_classes = [SessionAuthentication,BaseAuthentication]
    
    
    