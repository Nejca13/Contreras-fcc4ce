/**
 * Actualiza una nota mediante una solicitud HTTP PUT.
 * @async
 * @function
 * @param {number} noteId - Identificador único de la nota a actualizar.
 * @param {object} updatedNote - Objeto que representa la nota actualizada.
 * @returns {Promise<void>} Promesa que se resuelve después de procesar la solicitud de actualización.
 */
export const updateNotes = async (noteId, updatedNote) => {
  try {
    const response = await fetch(`http://localhost:3000/notes/${noteId}/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedNote),
    });

    if (response.ok) {
      // La solicitud fue exitosa, puedes manejar el resultado si es necesario
      console.log("Note updated successfully!");
    } else {
      // Manejar errores si la respuesta no fue exitosa
      console.error('Error al actualizar la nota');
    }
  } catch (error) {
    console.error('Error de red', error);
  }
};
