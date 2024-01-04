const API_URL = 'http://www.localhost:3000/notes'
export const getAllNotes = ({setErrorMessage, setNotes}) => {
    fetch(API_URL)
  .then(response => {
    // Verifica si la solicitud fue exitosa (código de respuesta 200)
    if (!response.ok) {
      setErrorMessage('Error al obtener las notas')
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