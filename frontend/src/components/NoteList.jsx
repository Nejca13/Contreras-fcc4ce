import Note from './Note'

const NoteList = ({ notes, refreshList, title, listMode }) => {
  return (
    <div style={{ width: '50%' }}>
      <h2>{title}</h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {notes.length === 0 ? (
          <span>
            There are no active notes.
            <strong>
              <p>Check the archived notes!</p>
            </strong>
          </span>
        ) : (
          notes.map((notes) => (
            <Note
              notes={notes}
              key={notes.id}
              refreshList={refreshList}
              listMode={listMode}
            />
          ))
        )}
      </ul>
    </div>
  )
}

export default NoteList
