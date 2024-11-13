from rest_framework.viewsets import ModelViewSet
from ..models import Task
from .serializers import TaskSerializers

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()

    serializer_class = TaskSerializers
