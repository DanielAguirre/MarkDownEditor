import React, { useContext } from 'react'
import styled from 'styled-components';
// import {EditorContext} from '../Context';


const Modal =  ({children, closeModal}) => {
  // const {state, dispatch} = useContext(EditorContext)

  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
     <ModalWrapper onClick={closeModal}>
       {children}
      </ModalWrapper>
  )
}

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 35%;
  width: 54%;
  height: 30%;
  min-width: 350px;
  min-height: 150px;
  background: #eee;
`;
