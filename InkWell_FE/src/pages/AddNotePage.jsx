import React, { useState } from 'react'
import "./AddNotePage.css";
import { useNavigate } from 'react-router-dom';

const AddNotePage = ({addNote}) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("") // Set default to match your Django model
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Fix validation logic - use || instead of &&
    if(!title && !body && !category) {
      alert("Please fill in all fields");
      return;
    }
    
    // Create note object inside handleSubmit to get current values
    const newNote = {
      title: title,
      body: body, 
      category: category
    }
    
    console.log(newNote)

    addNote(newNote)
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h5>Add New Note</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter note's title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={4}
          placeholder="Enter note's content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="categorySelect" className="form-label">
          Note's category
        </label>
        <select 
          id="categorySelect"
          className="form-select"
          aria-label="Default select example" 
          style={{height: "40px"}}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Pick a category</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>

      <button 
        type="submit"
        className="btn btn-primary d-flex justify-content-center" 
        style={{width:"100%"}}
      >
        Add Note
      </button>
    </form>
  )
}

export default AddNotePage