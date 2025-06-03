from django.db import models

# Create your models here.
class home(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300, blank=True)
    description = models.TextField()
    profile_image = models.ImageField(upload_to='profile/', blank = True)
    
    
    def __str__(self):
        return self.title
 
class About(models.Model):
    heading = models.CharField (max_length=200)
    bio=  models.TextField()
    resume = models.FileField(upload_to='resume/', blank=True)
    location = models.CharField(max_length=100, blank=True)
    
    def __str__(self):
        return self.heading 
    
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image=  models.ImageField(upload_to='projects/')
    github_link = models.URLField(blank=True, null=True)
    live_demo_link = models.URLField(blank=True, null=True)
    tech_stack = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
    
class Skill(models.Model):
    name=  models.CharField(max_length=100)
    level = models.IntegerField(default=80)
    icon = models.CharField(max_length=100, blank = True)
    
    def __str__(self):
        return self.name
    
class Contact(models.Model):
    
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.email} "