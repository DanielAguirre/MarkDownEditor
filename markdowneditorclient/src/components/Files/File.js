import React, {useContext, useEffect} from 'react'
import styled from 'styled-components';
import { ReactComponent as FileIcon } from '../../Icons/documento.svg'
import { ReactComponent as GarbageIcon } from '../../Icons/basura.svg';
import Modal from '../Modal';
import {PrimaryButton, DangerButton, CloseButton} from '../Buttons';
import { EditorContext } from '../../Context';
import api from '../../api';

export default ({name, editedAt, id}) => {
  const {state, dispatch } = useContext(EditorContext);
  
  const openModal = () => {
    dispatch({type: 'OPEN_MODAL_DELETE_FILE'})
  } 

  const deleteFile = async () => {
    dispatch({type: 'DELETE_FILE', action:{uuid:id}})
    const response = await api.deleteFile(id)
  }

  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL_DELETE_FILE'})
  }

  const readFile = () => {
    if(state.actualFile.edited) {
      dispatch({type:'OPEN_MODAL'})
    }
    else {
      dispatch({type:'READ_FILE', uuid:id})
    }
    
  }

  return (
    <div>
      <ButtonWrapper>
        <Button onClick={readFile} >
          <FileIcon />
        </Button>
        <Button onClick={openModal}>
          <GarbageIcon />
        </Button>
      </ButtonWrapper>
      <TimeWrapper> {editedAt} </TimeWrapper>
      <TitleWrapper> {name} </TitleWrapper>
      <Modal
        on={state.modalDeleteFileIsOpen}
        toggle={closeModal}
      >
        <div>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <p>Do you want to delete this file?</p>
          <PrimaryButton onClick={deleteFile}>Yes</PrimaryButton>
          <DangerButton onClick={closeModal}>No</DangerButton>
        </div>
      </Modal>
    </div>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: flex-start;
`;

const Button = styled.button`
  width: auto;
  padding: 0;
  margin: 0;
  border: 0;
`;

const TimeWrapper = styled.h3`
  padding: 0;
  margin: 0;
  border: 0;
  font-weight: 300;
  font-size: 10px;
`;

const TitleWrapper = styled.h3`
  padding: 0;
  margin: 8px;
  border: 0px;
  font-size: 14px;
  font-weight: 300;
`;