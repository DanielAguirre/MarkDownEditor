import React, {useContext} from 'react'
import uuidv4 from 'uuid/v4';
import styled from 'styled-components';
import Modal from './Modal';
import {EditorContext} from '../Context';
import api from '../api';
import {PrimaryButton, DangerButton, CloseButton} from './Buttons';

export default () => {
    const {state, dispatch} = useContext(EditorContext)
    let ContentComponent ;

    const createFile = () => {
      if(state.actualFile.edited) {
        dispatch({type:'OPEN_MODAL'})
      }
      else {
        dispatch({type:'CREATE_FILE'})
      }
    }

    const eraseAndCreateNewFile = () => {
      dispatch({type:'ERASE_AND_CREATE_NEW_FILE'})
    } 

    const saveFile = async () => {
      dispatch({type:'SAVE_FILE'})
      // const {actualFile} = state;
      // actualFile.uuid = uuidv4()
      try {
        
        const response = await api.saveFile(state.actualFile)
        // dispatch({type:'SAVED_FILE'})
      } catch(e) {}
    }
    
    const closeModal = () => { dispatch({type:'CLOSE_MODAL'}) }

  return (
    <div>
      <button onClick={createFile}>Create</button>
      <button onClick={saveFile} >Save</button>
      <Modal
        on={state.modalIsOpen}
      >
          <CloseButton onClick={closeModal}>X</CloseButton>
          <p>There its a file without saved your sure you want to create a new one?</p>
          <ButtonsWrapper>
            <PrimaryButton onClick={eraseAndCreateNewFile}>Yes</PrimaryButton>
            <DangerButton onClick={closeModal}>No</DangerButton>
          </ButtonsWrapper>
      </Modal>
    </div>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & > button {
    margin-right: 5px;
  }
`;


