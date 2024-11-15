from django.db import models


class Image(models.Model):
    
    image = models.ImageField(upload_to="task_images/", blank=True, null=True)
    name = models.CharField(max_length=30, blank=True, null=False, default="Name of task ><")

    def __str__(self):
        return "{0} - {1}".format(self.id, self.name)
    
    @classmethod
    def get_defualt_image(cls):
        category, created = (cls.objects.get_or_create(
            image=None,
            defaults=(dict(name=None))
        ))
        return category.pk    
