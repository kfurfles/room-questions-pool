import React from "react";
import RootRouter from "~/router";
import {GlobalStyle} from '@styles/theme/default/global'
import { ModalRoot } from "../Modal";
import { useModal } from '@core/hooks/modals.hooks'

function App() {
  const [modal,setModal] = useModal()

  return (
    <>
      <GlobalStyle />
      
      <RootRouter />

      <ModalRoot isOpen={true} onClose={() => console.log('vai fechar')} >
        <div style={{ 
          display: 'inline-flex',
          width: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          alignItems: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '36px',
        }}>
          <h1 style={{ 
            borderRadius: '5px',
            border: '1px solid white',
            padding: '30px',
            textAlign: 'center'
          }}>
            Meu Modal
          </h1>
        </div>
      </ModalRoot>
    </>
  );
}

export { App };
