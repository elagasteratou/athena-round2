from core import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

# from core.views import HealthCheckView, hello_world

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include),
    path("api/auth/", include("dj_rest_auth.urls"), name="auth"),
    path("", include("home.urls"), name="home"),
    path("", include("chat_bot.urls"), name="chat_bot"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
