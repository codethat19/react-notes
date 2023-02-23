import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note, colorId}) => {

  const colorArray = ["#00425A", "#1F8A70", "#BFDB38", "#FC7300", "#FCE22A", "#30E3DF",
"#D61355", "#F94A29", "#FCE22A", "#30E3DF"];
  // console.log(colorId);

  const backgroundColour = {
    backgroundColor: colorArray[colorId]
  }

  return (
    <Link to={`/edit-note/${note.id}`} style={backgroundColour}className="note">
        <h4>{note.title.length > 50 ? (note.title.substr(0, 50)) + "..." : note.title}</h4>
        <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem