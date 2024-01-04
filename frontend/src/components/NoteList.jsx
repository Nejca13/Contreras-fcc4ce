import Note from './Note'

const NoteList = ({ notes, refreshList }) => {
  return (
    <div style={{ width: 'auto' }}>
      <h2>Active Notes</h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {notes.map((notes) => (
          <Note notes={notes} key={notes.id} refreshList={refreshList} />
        ))}
      </ul>
    </div>
  )
}

export default NoteList
