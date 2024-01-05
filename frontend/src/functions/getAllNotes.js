let API_URL
export const getAllNotes = ({setErrorMessage, setNotes, priority}) => {
  switch (priority) {
    case 'all':
      API_URL = 'http://www.localhost:3000/notes';
      break;
    case 'low':
      API_URL = 'http://www.localhost:3000/notes/filter/low';
      break;
    case 'medium':
      API_URL = 'http://www.localhost:3000/notes/filter/medium';
      break;
    case 'high':
      API_URL = 'http://www.localhost:3000/notes/filter/high';
      break;
    default:
      API_URL = 'http://www.localhost:3000/notes';
      break;
  }
    fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener las notas');
    }
    // Parsea la respuesta JSON
    return response.json();
  })
  .then(notes => {
    // Maneja las notas obtenidas
    setNotes(notes)
  })
  .catch(error => {
    // Maneja errores de la solicitud
    console.error('Error de solicitud:', error);
    setErrorMessage(error)
  });
}