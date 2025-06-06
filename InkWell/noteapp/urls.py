from django.urls import path
from django.shortcuts import redirect
from . import views

def redirect_to_notes(request):
    return redirect('notes')

urlpatterns = [
    path("", redirect_to_notes, name='home'),
    path("notes/", views.notes, name='notes'),
    path("notes/<slug:slug>/", views.note_detail, name="note-detail"),
    path("notes-search/", views.search_notes, name = 'notes-search')
]


# endpoints:
# GET_ALL_NOTES_and_CREATE_NEW_NOTE = "127.0.0.1:8000/notes/"
# GET_SPECIFIC_NOTE = "127.0.0.1:8000/notes/note-slug"
# SEARCH_NOTES = "127.0.0.1:8000/notes-search/?search=meeting"