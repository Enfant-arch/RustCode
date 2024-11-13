from django.db import models



class Task(models.Model):
    id = models.BigIntegerField(primary_key=True, auto_created=True, blank=False, null=False)
    title = models.CharField(name="title", max_length=1000,)
    describe = models.TextField(name="describe", max_length=20000, default="DO IT")

    def __str__(self) -> str:
        return "Rust task #{0}".format(self.id)
    