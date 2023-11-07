from django.views.generic import TemplateView
from django.urls import path
view = TemplateView.as_view(template_name="frontend/index.html")
urlpatterns = [
    path("", view),
    path("create-room/", view),
    path("room-join/", view),
]

