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
        console.log("Note updated successfully!")
      } else {
        // Manejar errores si la respuesta no fue exitosa
        console.error('Error al actualizar la nota');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };