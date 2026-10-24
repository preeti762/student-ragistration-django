from django.db import models


class Student(models.Model):
    full_name = models.CharField(max_length=100)

    gender = models.CharField(
        max_length=20)


    email = models.EmailField()
    age = models.IntegerField()

    def __str__(self):
        return self.full_name

    phone = models.CharField(max_length=15)

