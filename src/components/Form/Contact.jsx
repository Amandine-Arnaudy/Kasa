import React, { useRef, useState } from "react";
import Typed from 'react-typed';
import emailjs from "@emailjs/browser";
import Modal from "react-modal";
import Or from '../../assets/Or.png'
import './Contact.scss';

Modal.setAppElement("#root");

export const Contact = () => {
  const form = useRef();
  const [isFormIncomplete, setIsFormIncomplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "email", "message"];
    const isAnyFieldEmpty = requiredFields.some(field => !form.current[field].value);

    if (isAnyFieldEmpty) {
      setIsFormIncomplete(true);
      return;
    }

    setIsFormIncomplete(false);

    emailjs.sendForm("service_f4e94yc", "template_65fwhqo", form.current, "Ncgy_tuMle1vAK76w").then(
      (result) => {
        console.log(result.text);
        form.current.reset(); // Reset Formulaire
        setIsModalOpen(true); // Modal confirmation
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form className="contact" ref={form} onSubmit={sendEmail}>
        <Typed
          strings={[
            "Contactez-moi"
          ]}
          typeSpeed={100}
        />
        <img src={Or} alt="Tiret Or" />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        {isFormIncomplete && <p style={{ color: "red" }}>Veuillez remplir tous les champs.</p>}
        <button type="submit">Soumettre</button>
      </form>

      <Modal className='modal' isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Confirmation d'envoi</h2>
        <p>Votre message a été envoyé avec succès !</p>
        <button onClick={closeModal}>Fermer</button>
      </Modal>
    </div>
  );
};

export default Contact;