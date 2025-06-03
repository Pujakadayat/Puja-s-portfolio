from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *

    
class Homeserializer(serializers.ModelSerializer):
    class Meta:
        model= home
        fields = ["title", "subtitle", "description", "profile_image"]
        
        
    def create(self,validated_data):
        user = User.objects.create(**validated_data)
        
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model =About
        fields = ["heading", "bio","resume","location"]
        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["title ", "description ","image", "github_link", "lilve_demo_link","tech_stack","created_at"] 
        
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["name ", "level","icon"] 
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["name ", "email","message", "submitted_at"] 
    
