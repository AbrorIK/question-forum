from django.db import models
from datetime import datetime

# Create your models here.


class Question(models.Model):
    title = models.CharField(max_length=200)
    text = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Answer(models.Model):
    question = models.ForeignKey(
        Question, related_name="answers", on_delete=models.CASCADE
    )
    text = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question.title
