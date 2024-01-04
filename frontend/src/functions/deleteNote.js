export const deleteNote = async (noteId) => {
    try {
      const response = await fetch(`http://localhost:3000/notes/${noteId}/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('No se pudo borrar la nota');
      }
      // Realizar cualquier otra lógica después de borrar la nota
      console.log('Nota borrada exitosamente');
    } catch (error) {
      console.error('Error al intentar borrar la nota:', error.message);
    }
  };
  