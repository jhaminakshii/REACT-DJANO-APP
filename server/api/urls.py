from django.urls import path
from .views import get_notes , create_notes

urlpatterns = [
    path('notes', get_notes, name='get_notes'),
    path('notes/create/' , create_notes , name='create_notes')
]