import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import AddNotePage from './pages/AddNotePage'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaLeaf } from 'react-icons/fa'
import { toast } from 'react-toastify'

const App = () => {
  const [notes, setNotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filterText, setFilterText] = useState("")
  const [searchText, setSearchText] = useState("")

  const handleFilterText = (val) => {
    setFilterText(val)
  };

  const handleSearchText = (val) => {
    setSearchText(val)
  }

  useEffect(() => {
    if(searchText.length < 3) return;
    
    axios.get(`http://127.0.0.1:8000/notes-search/?search=${searchText}`)
    .then(res => {
      console.log(res.data)
      if (Array.isArray(res.data)) {
        setNotes(res.data)
      } else {
        console.warn('Search API returned non-array data:', res.data)
        setNotes([])
      }
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [searchText])

  const filteredNotes = Array.isArray(notes) ? (
    filterText == "BUSINESS"
    ? notes.filter(note => note.category=="BUSINESS")
    : filterText == "PERSONAL"
    ? notes.filter(note => note.category=="PERSONAL")
    : filterText == "IMPORTANT"
    ? notes.filter(note => note.category=="IMPORTANT")
    : notes
  ) : []

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://127.0.0.1:8000/notes/")
    .then(res => {
      console.log(res.data)
      if (Array.isArray(res.data)) {
        setNotes(res.data)
      } else {
        console.warn('Notes API returned non-array data:', res.data)
        setNotes([])
      }
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err.message)
      setIsLoading(false)
      setNotes([])
    })
  }, [])

  const addNote = (data) => {
    axios.post("http://127.0.0.1:8000/notes/", data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      setNotes(prevNotes => [...prevNotes, res.data])
      toast.success("New note added");
      console.log(res.data);
    })
    .catch(err => {
      console.error(err.response?.data || err.message);
      toast.error("Failed to add note");
    });
  };

  const updateNote = (data, slug) => {
    axios.put(`http://127.0.0.1:8000/notes/${slug}/`, data)
    .then(res => {
      console.log(res.data)
      setNotes(prevNotes => 
        prevNotes.map(note => 
          note.slug === slug ? res.data : note
        )
      )
      toast.success("Note Updated")
    })
    .catch(err => {
      console.log(err.message)
      toast.error("Failed to update note")
    })
  }

  const deleteNote = (slug) => {
    return axios.delete(`http://127.0.0.1:8000/notes/${slug}/`)
    .then(() => {
      setNotes(prevNotes => prevNotes.filter(note => note.slug !== slug))
      toast.success("Note deleted")
    })
    .catch(err => {
      console.log(err.message)
      toast.error("Failed to delete note")
      throw err;
    })
  }

  const router = createBrowserRouter(createRoutesFromElements( 
    <Route path="/" element={<MainLayout searchText={searchText} handleSearchText={handleSearchText}/>}>
      <Route index element={<HomePage notes={filteredNotes} loading={isLoading} handleFilterText={handleFilterText}/>}/>
      <Route path='/add-note' element={<AddNotePage addNote={addNote}/>} />
      <Route path='/notes/:slug' element={<NoteDetailPage deleteNote={deleteNote}/>}/>
      <Route path='/edit-note/:slug' element={<EditNotePage updateNote={updateNote}/>} />
    </Route>
  ))
  
  return <RouterProvider router={router} />
}

export default App