from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=300, null=True)

    @classmethod
    def get_defualt_category(cls):
        category, created = (cls.objects.get_or_create(
            name='RustCode',
            defaults=(dict(description="Defualt rust tasks"))
        ))
        return category.pk
    
    def __str__(self):
        return "{}".format(self.name)
    