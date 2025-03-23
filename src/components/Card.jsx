import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useModalNotes } from "../hooks/useModalNotes";
import useCrud from "../hooks/useCrud";
import ModalNotes from "./ModalNotes";
import FormNotes from "./FormNotes";
import React, { useEffect, useState } from "react";

function Card() {
  const [isOpenModalCard, OpenModalCard, CloseModalCard] = useModalNotes(false);
  const { getNotes, deleteNotes } = useCrud();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, [getNotes]);

  const handleDelete = (id) => {
    deleteNotes(id);
    setNotes(getNotes());
  };

  return (
    <>
      {notes.length > 0 ? (
        notes.map((notas) => (
          <div className="col-md-4 col-xs-12" key={notas.id}>
            <div className="card bg-secondary-subtle border mt-2">
              <div className="card-header text-center"> {notas.titulo} </div>
              <div className="card-body">
                <p className="card-text">{notas.description}</p>
              </div>
              <div className="card-footer text-body-secondary d-flex justify-content-end gap-2">
                <button className="btn btn-primary" onClick={OpenModalCard}>
                  <FontAwesomeIcon icon={faFilePen} />
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(notas.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3>No hay Notas agregadas</h3>
        </div>
      )}
      <ModalNotes
        isOpen={isOpenModalCard}
        closeModal={CloseModalCard}
        title="Actualizar Nota"
        btn="Actualizar"
      >
        <FormNotes />
      </ModalNotes>
    </>
  );
}

export default Card;
