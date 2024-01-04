import { useEffect, useState } from 'react'
import NoteList from '../components/NoteList'
import CreateNote from '../components/CreateNote'
import { getAllNotes } from '../functions/getAllNotes'

const Home = () => {
  const [notes, setNotes] = useState([])
  const [errorMessage, setErrorMessage] = useState('No hay notas que mostrar')

  useEffect(() => {
    getAllNotes({ setNotes, setErrorMessage })
  }, [])

  return (
    <div style={{ display: 'flex', width: '80%', gap: '40px' }}>
      <div style={{ width: '50%' }}>
        <h1>Notes App</h1>
        <CreateNote
          refreshList={() => getAllNotes({ setNotes, setErrorMessage })}
        />
      </div>
      {notes.length > 0 ? (
        <NoteList
          notes={notes}
          refreshList={() => getAllNotes({ setNotes, setErrorMessage })}
        />
      ) : (
        <strong>{errorMessage}</strong>
      )}
    </div>
  )
}

export default Home
