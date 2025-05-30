import React from 'react'
import { MdStickyNote2 } from "react-icons/md";
import { Link } from "react-router-dom"
import { FormatDate } from './FormatDate';

  const NoteCard = ({note}) => {
  const body = `${note.body.split(" ").slice(0, 20).join(" ")} ...`
  const color = note.category == "BUSINESS" ? "blue" : note.category == "PERSONAL" ? "green" : "purple"
  
  return (
    <div className="col-md-4 single-note-item all-category">
      <div 
        className="card card-body" 
        style={{ 
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        <span className="side-stick" style={{ backgroundColor: color }}></span>
        <MdStickyNote2 style={{ marginLeft: "auto", color: color }} />
        <Link to={`/notes/${note.slug}`} style = {{textDecoration: "none",color:'black'}}>
        <h5
          className="note-title text-truncate w-75 mb-0"
          data-noteheading="Book a Ticket for Movie"
        >
          {note.title}
        </h5>
        </Link>
        
        
        <p className="note-date font-12 text-muted">{FormatDate(note.updated)}</p>
        <div className="note-content">
          <p
            className="note-inner-content text-muted"
            data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
          >
            {body}

          </p>
        </div>
        <div className="d-flex align-items-center">
       
          <span className="d-flex justify-content-between align-items-center">
            <a href="/notes-detail" className="text-decoration-none"></a>
  
            <small className="text-success fw-semibold px-2 py-1 rounded" style={{
              backgroundColor: "rgba(25, 135, 84, 0.08)",
              border: "1px solid rgba(25, 135, 84, 0.2)",
              color:color
            }}>
                {note.category}
            </small>
            </span>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;