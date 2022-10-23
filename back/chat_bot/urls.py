from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import ChatBotView

app_name = "home"

urlpatterns = [
    path("reccomendations/", ChatBotView.as_view(), name="reccomendations"),
]
