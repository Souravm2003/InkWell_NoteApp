from django.shortcuts import render
from noteapp.models import Note
from noteapp.serializers import NoteSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q
from rest_framework import status


@api_view(['GET'])
def search_notes(request):
    query = request.query_params.get("search")
    notes = Note.objects.filter(Q(title__icontains=query) | Q(body__icontains=query) | Q(category__icontains=query))
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET", "POST"])
def notes(request):
    if request.method == "GET":
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        print(f"Received POST data: {request.data}")  
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(f"Serializer errors: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def note_detail(request, slug):
    print(f"Received request: {request.method} for slug: '{slug}'")
    
    try:
        note = Note.objects.get(slug=slug)
        print(f"Found note: {note.title}")
    except Note.DoesNotExist:
        print(f"Note with slug '{slug}' not found")
        return Response({"error": "Note not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        print(f"Database error: {str(e)}")
        return Response({"error": "Database error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    if request.method == 'GET':
        serializer = NoteSerializer(note)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        try:
            print(f"Attempting to delete note: {note.title}")
            note.delete()
            print(f"Successfully deleted note with slug: '{slug}'")
            return Response({"message": "Note deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            print(f"Delete error: {str(e)}")
            return Response({"error": f"Delete failed: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)