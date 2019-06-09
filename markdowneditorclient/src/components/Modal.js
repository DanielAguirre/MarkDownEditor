import React, { useContext } from 'react'
import styled from 'styled-components';
import {EditorContext} from '../Context';


const Modal =  ({children, on}) => {
  const {state, dispatch} = useContext(EditorContext)

  return (
    <div>
      {on && <ModalWrapper>
       {children}
      </ModalWrapper>}
    </div>

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
