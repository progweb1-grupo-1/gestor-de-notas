import React, { useState } from "react";
import ModalNotes from "./ModalNotes"; // Asegúrate de que este import esté aquí y no declares ModalNotes dentro del archivo
import { useModalNotes } from "../hooks/useModalNotes";
import useCrud from "../hooks/useCrud";

function AddNotes() {
  const [isOpenModal1, OpenModal1, CloseModal1] = useModalNotes(false);
  const { addNotesF, updateNotesF } = useCrud();
  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const handleOpenModal = () => {
    OpenModal1();
    setIsEditing(false);
    setCurrentNote(null); // Reset the note for a new one
  };

  const handleSave = (noteData) => {
    if (isEditing) {
      updateNotesF(currentNote.id, noteData);
    } else {
      addNotesF(noteData);
    }
    setIsEditing(false);
    setCurrentNote(null);
    CloseModal1();
  };

  return (
    <div className="border rounded col-xs-12 col-md-7 p-2">
      <div className="d-flex justify-content-between">
        <h3>Mis Notas</h3>
        <button className="btn btn-primary" onClick={handleOpenModal}>
          Crear Nota
        </button>
      </div>

      <ModalNotes
        isOpen={isOpenModal1}
        closeModal={CloseModal1}
        title={isEditing ? "Actualizar Nota" : "Añadir Nota"}
        btn={isEditing ? "Actualizar" : "Guardar"}
        onSave={handleSave}
        currentNote={currentNote}
      />
    </div>
  );
}

export default AddNotes;
