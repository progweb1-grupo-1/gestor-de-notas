import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const useCrud = () => {
  const [newNote, setNewNote] = useState([]);

  // Cargar datos de localStorage al montar el hook
  useEffect(() => {
    const storedNotes = localStorage.getItem("Notes");
    if (storedNotes) {
      setNewNote(JSON.parse(storedNotes));
    }
  }, []);

  /**Añadir nota nueva**/
  const addNotesF = (refs) => {
    if (!refs) return;

    const Note = {
      id: Date.now(),
      titulo: refs.tituloRef.current.value,
      description: refs.descriptionRef.current.value,
    };

    const updateNote = [...newNote, Note];
    setNewNote(updateNote);
    localStorage.setItem("Notes", JSON.stringify(updateNote));
    Swal.fire({
      text: "Nota Guardada",
      icon: "success",
      confirmButtonText: "Excelente",
    });
  };

  /**Obtener la data**/
  const getNotes = () => {
    return newNote;
  };

  /**Eliminar una Nota**/
  const deleteNotes = (id) => {
    const updateNote = newNote.filter((Notes) => Notes.id !== id);
    setNewNote(updateNote);
    localStorage.setItem("Notes", JSON.stringify(updateNote));
  };

  return { addNotesF, getNotes, deleteNotes };
};

export default useCrud;
