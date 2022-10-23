from django.db import models


class Chatbot(models.Model):
    conversation_topic = models.CharField(max_length=200)
    answer = models.CharField(max_length=200)


class ChatbotConversation(models.Model):
    conversation_topic = models.CharField(max_length=200)
    outcome = models.CharField(max_length=200)
    feedback = models.CharField(max_length=200)
