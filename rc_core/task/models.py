from django.db import models
from .feature_models import (Category, Image)



class Task(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="category", null=False, default=Category.get_defualt_category)
    image = models.ForeignKey(Image, on_delete=models.DO_NOTHING, related_name="images", null=True)
    title = models.CharField(name="title", max_length=1000,
                              verbose_name="Название задачи")
    describe = models.TextField(name="describe", max_length=20000,
                                 default="DO IT", verbose_name="Опишите задачу")
    
    solved_count = models.IntegerField(default=0, editable=True, auto_created=0)
    unit_test_code = models.TextField()
    
    


    #TODO : also about main part of model should be ramedaed ID, Make categories, description image 

    #My architecture task made link to unit-taste for all solution, in step adding I can load Test buil to solution, how release that on rust structre - it insterting !!!

    
    def __str__(self) -> str:
        return "Rust task #{0}".format(self.id)
    





    