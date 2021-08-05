import React from "react";
import { UseModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";

function Modals() {
  const [isOpenModal1, openModal1, closeModal1] = UseModal(false);
  const [isOpenModal2, openModal2, closeModal2] = UseModal(false);
  const [isOpenModal3, openModal3, closeModal3] = UseModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro modal</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae optio
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="Tecnology" />
      </Modal>
      <button onClick={openModal3}>Modal Contacto</button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <ContactForm />
      </Modal>
    </div>
  );
}

export default Modals;
