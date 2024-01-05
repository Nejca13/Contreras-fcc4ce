import { useEffect, useState } from 'react'
import NoteList from '../components/NoteList'
import CreateNote from '../components/CreateNote'
import { getAllNotes } from '../functions/getAllNotes'

const Home = () => {
  const [notes, setNotes] = useState([])
  const [priority, setPriority] = useState('all')
  const [errorMessage, setErrorMessage] = useState('No notes to display')
  const [listMode, setListMode] = useState(true)

  useEffect(() => {
    getAllNotes({ setNotes, setErrorMessage, priority })
  }, [priority])

  let unarchivedNotes = notes.filter((note) => note.archived === false)
  let archivedNotes = notes.filter((note) => note.archived === true)

  return (
    <div style={{ display: 'flex', width: '100%', gap: '40px' }}>
      <div
        style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <h1>Notes App</h1>
        <CreateNote
          refreshList={() => getAllNotes({ setNotes, setErrorMessage })}
        />
        {listMode === true ? (
          <button
            onClick={() => setListMode(!listMode)}
            style={{ color: '#aec31f' }}
          >
            Archived Notes
            <strong style={{ color: '#aec31f' }}>
              {' '}
              {archivedNotes.length}
            </strong>
          </button>
        ) : (
          <button
            onClick={() => setListMode(!listMode)}
            style={{ color: '#09b03c' }}
          >
            Active Notes
            <strong style={{ color: '#09b03c' }}>
              {' '}
              {unarchivedNotes.length}
            </strong>
          </button>
        )}
      </div>
      <nav
        style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <p>Filter: </p>
        <select
          name='priority'
          id='priority'
          defaultValue={'all'}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='all'>All</option>
          <option value='low'>Low priority</option>
          <option value='medium'>Medium priority</option>
          <option value='higth'>High priority</option>
        </select>
      </nav>
      {listMode === true ? (
        notes.length > 0 ? (
          <NoteList
            notes={unarchivedNotes}
            title='Active Notes'
            listMode={listMode}
            refreshList={() => getAllNotes({ setNotes, setErrorMessage })}
          />
        ) : (
          <strong>{errorMessage}</strong>
        )
      ) : notes.length > 0 ? (
        <NoteList
          notes={archivedNotes}
          title='Archived Notes'
          listMode={listMode}
          refreshList={() => getAllNotes({ setNotes, setErrorMessage })}
        />
      ) : (
        <strong>{errorMessage}</strong>
      )}
    </div>
  )
}

export default Home
