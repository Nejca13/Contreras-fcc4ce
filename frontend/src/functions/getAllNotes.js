/**
 * Obtiene todas las notas o notas filtradas por prioridad mediante una solicitud HTTP GET.
 * @async
 * @function
 * @param {object} params - Parámetros de la función.
 * @param {Function} params.setErrorMessage - Función para establecer un mensaje de error en caso de fallo.
 * @param {Function} params.setNotes - Función para establecer las notas obtenidas.
 * @param {string} params.priority - Prioridad para filtrar las notas ('all', 'low', 'medium', 'higth').
 * @returns {Promise<void>} Promesa que se resuelve después de procesar la solicitud de obtención de notas.
 */
export const getAllNotes = ({ setErrorMessage, setNotes, priority }) => {
  
  let API_URL;

  switch (priority) {
    case 'all':
      API_URL = 'http://localhost:3000/notes';
      break;
    case 'low':
      API_URL = 'http://localhost:3000/notes/filter/low';
      break;
    case 'medium':
      API_URL = 'http://localhost:3000/notes/filter/medium';
      break;
    case 'higth':
      API_URL = 'http://localhost:3000/notes/filter/higth';
      break;
    default:
      API_URL = 'http://localhost:3000/notes';
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
      setNotes(notes);
    })
    .catch(error => {
      // Maneja errores de la solicitud
      console.error('Error de solicitud:', error);
      setErrorMessage(error);
    });
};
