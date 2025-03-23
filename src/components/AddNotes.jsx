import React from "react";
import ModalNotes from "./ModalNotes";
import { useModalNotes } from "../hooks/useModalNotes";

function AddNotes() {
  const [isOpenModal1, OpenModal1, CloseModal1] = useModalNotes(false);

  return (
    <div className="border rounded col-xs-12 col-md-7 p-2">
      <div className="d-flex justify-content-between">
        <h3>Mis Notas</h3>
        <button
          className="btn btn-primary"
          onClick={OpenModal1}
        >
          Crear Nota
        </button>
        <ModalNotes isOpen={isOpenModal1} closeModal={CloseModal1} title='Añadir Nota' btn='Guardar'>
        </ModalNotes>
      </div>
    </div>
  );
}

export default AddNotes;
