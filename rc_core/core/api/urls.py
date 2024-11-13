from rest_framework.routers import DefaultRouter
from task.api.urls import task_router

from django.urls import path, include


router = DefaultRouter()
router.registry.extend(task_router.registry)



urlpatterns = [
    path("", include(router.urls))
]