from django.views.generic import TemplateView
from django.urls import path

urlpatterns = [
    path("", TemplateView.as_view(template_name="frontend/index.html")),
]
