from django.shortcuts import render
from .models import Question, Answer
from .serializers import QuestionSerializer, AnswerSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

# Create your views here.


class QuestionView(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class AnswerView(generics.ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    def get_queryset(self):
        return Answer.objects.filter(question=self.kwargs["pk"])

    def create(self, request, *args, **kwargs):
        question = Question.objects.get(id=self.kwargs["pk"])
        serializer = AnswerSerializer(
            data={**request.data, "question": self.kwargs["pk"]}
        )
        if serializer.is_valid():
            serializer.save(question=question)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
