from django.urls import path
from rest_framework.routers import DefaultRouter

from home.views import (
    HomeFinderView,
)

app_name = "home"

router = DefaultRouter()
router.register(r"home", HomeFinderView, basename="r1")
# router.register(
#     r"insight-questions/r1", InsightQuestionViewSetR1, basename="questions-r1"
# )
#
# router.register(r"insights/create/r1", InsightCreateViewSetR1, basename="create-r1")
urlpatterns = router.urls