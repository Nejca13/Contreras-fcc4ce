import { createNewNote } from '../functions/createNewNote'

const CreateNote = ({ refreshList }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formDataObject = Object.fromEntries(new FormData(e.target))
    createNewNote(formDataObject)
    console.log(formDataObject)
    setTimeout(() => {
      refreshList()
    }, 400)
    e.target.reset()
  }

  return (
    <section
      style={{
        border: '2px solid #161F27',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <h3>Create a new note here!!</h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        action=''
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div>
          <label htmlFor='title'>
            Title
            <input required type='text' name='title' />
          </label>
          <label htmlFor='tag'>
            Tag
            <select
              name='tag'
              id='select'
              defaultValue='low'
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
          ></textarea>
        </label>
        <input type='submit' style={{ width: 'fit-content' }} value={'Save'} />
      </form>
    </section>
  )
}

export default CreateNote
