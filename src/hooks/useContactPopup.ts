"use client";
import { useState } from 'react';

export const useContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Let's Connect");

  const openPopup = (popupTitle?: string) => {
    if (popupTitle) setTitle(popupTitle);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    title,
    openPopup,
    closePopup
  };
};