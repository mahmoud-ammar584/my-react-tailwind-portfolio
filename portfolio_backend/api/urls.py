
from django.urls import path
from .views import ProjectListView, ContactMessageCreateView

urlpatterns = [
    path('projects/', ProjectListView.as_view(), name='projects'),
    path('contact/', ContactMessageCreateView.as_view(), name='contact'),
]
