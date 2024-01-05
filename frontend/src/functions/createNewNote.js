/**
 * Crea una nueva nota mediante una solicitud HTTP POST.
 * @async
 * @function
 * @param {object} newNote - Objeto que representa la nueva nota.
 * @returns {Promise<void>} Promesa que se resuelve después de procesar la solicitud de creación de la nota.
 */
export const createNewNote = async (newNote) => {
  try {
    const response = await fetch('http://localhost:3000/notes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    });

    if (response.ok) {
      // La solicitud fue exitosa, actualiza el estado de las notas
      console.log('Nota creada exitosamente');
    } else {
      // Manejar errores si la respuesta no es exitosa
      console.error('Error adding note');
    }
  } catch (error) {
    // Manejar errores de red u otros errores
    console.error('Error adding note:', error);
  }
};
