import React, { useEffect, useState } from "react";
import { createPortal } from 'react-dom'
import { Container } from "./styles";
import { Drawer } from "../Drawer";
import { sleep } from "~/helpers";

interface ModalRootProps {
  isOpen: boolean, 
  onClose: () => void,
}

const ModalRoot: React.FC<ModalRootProps> = (props) => {
  const { isOpen = false, onClose, children } = props

  if(!isOpen) return null

  return createPortal(
    <Container className="modal-root">
     <Drawer show >{children}</Drawer>
    </Container>,
    document.body
  )
};

export { ModalRoot };
