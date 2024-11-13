from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import TaskViewSet

task_router  = DefaultRouter()
task_router.register(r'tasks', TaskViewSet)