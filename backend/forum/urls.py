from django.urls import path
from . import views

urlpatterns = [
    path("questions/", views.QuestionView.as_view()),
    path("questions/<int:pk>/answers/", views.AnswerView.as_view()),
]
