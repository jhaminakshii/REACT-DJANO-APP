from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Note #use Note model to manipulate data eg. to add and read data
from .serializer import NoteSerializer # converting data from json to python models


# Create your views here.

@api_view(['GET'])
def get_notes(request):
    notes = Note.objects.all()
    serializedData = NoteSerializer(notes , many=True).data
    return Response(serializedData)


@api_view(['POST'])
def create_notes(request):
    data = request.data
    serializer = NoteSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
