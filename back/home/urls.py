from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import HomeFinderView

app_name = "home"

urlpatterns = [
    path("homesearch/", HomeFinderView.as_view(), name="homesearch"),
    path("homesearch/<str:postcode>/", HomeFinderView.as_view(), name="postcode"),
    path("homesearch/cr43jx/", HomeFinderView.as_view(), name="mockpostcode"),
    path("homesearch/cr43jx/", HomeFinderView.as_view(), name="mockpostcode"),
]
