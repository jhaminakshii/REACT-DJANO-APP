from django.urls import path
from .views import get_notes , create_notes,note_details

urlpatterns = [
    path('notes/', get_notes, name='get_notes'),
    path('notes/create/' , create_notes , name='create_notes'),
    path('notes/<int:pk>', note_details , name='note_details'),
]