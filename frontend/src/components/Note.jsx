import { useState } from 'react'
import { deleteNote } from '../functions/deleteNote'
import { updateNotes } from '../functions/updateNotes'

const Note = ({ notes, refreshList }) => {
  const [editMode, setEditMode] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formDataObject = Object.fromEntries(new FormData(e.target))
    updateNotes(notes.id, formDataObject)
    setEditMode(false)
    setTimeout(() => {
      refreshList()
    }, 400)
  }

  return editMode ? (
    <div
      key={notes.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        action=''
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderBottom: '2px solid #161F27',
        }}
      >
        <div style={{ width: '100%' }}>
          <label htmlFor='title'>
            Title
            <input
              required
              type='text'
              name='title'
              defaultValue={notes.title}
            />
          </label>
          <label htmlFor='tag'>
            Tag
            <select
              name='tag'
              id='select'
              defaultValue={notes.tag}
              style={{ fontWeight: 'bold' }}
            >
              <option value='low'>Low priority</option>
              <option value='medium'>Medium priority</option>
              <option value='higth'>High priority</option>
            </select>
          </label>
        </div>
        <label htmlFor='content'>
          Note
          <textarea
            required
            name='content'
            id='content'
            cols='auto'
            rows='3'
            style={{ resize: 'none' }}
            defaultValue={notes.content}
          ></textarea>
        </label>
        <div style={{ display: 'flex' }}>
          <input
            type='submit'
            style={{ width: 'fit-content' }}
            value={'Confirm'}
          />
          <input
            type='button'
            value={'Cancel'}
            style={{ width: 'fit-content' }}
            onClick={() => setEditMode(false)}
          />
        </div>
      </form>
    </div>
  ) : (
    <div
      key={notes.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '2px solid #161F27',
      }}
    >
      <li>
        <strong>Title:</strong> {notes.title}
        <p>
          <strong>Content:</strong> {notes.content}
        </p>
      </li>
      <div>
        <button
          onClick={() => {
            deleteNote(notes.id)
            setTimeout(() => {
              refreshList()
            }, 400)
          }}
        >
          Delete
        </button>
        <button onClick={() => setEditMode(true)}>Edit</button>
      </div>
    </div>
  )
}

export default Note
