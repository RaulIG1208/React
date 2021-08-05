import { useState } from "react";

export function UseModal(initialvalue = false) {
  const [isOpen, setIsOpen] = useState(initialvalue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
}
