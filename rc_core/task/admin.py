from django.contrib import admin
from .models import Task, Category, Image


admin.site.register(Task)
admin.site.register(Image)
admin.site.register(Category)
