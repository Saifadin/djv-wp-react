import React, { createContext, useState } from 'react';

const ModalContext = createContext(null);

export const ModalContextProvider = ({ children }) => {
  const [visibleModal, setVisibleModal] = useState('');

  const toggleModal = (newVisibility, modalId) => {
    setVisibleModal(newVisibility ? modalId : '');
  };

  return <ModalContext.Provider value={{ visibleModal, toggleModal }}>{children}</ModalContext.Provider>;
};

export default ModalContext;
