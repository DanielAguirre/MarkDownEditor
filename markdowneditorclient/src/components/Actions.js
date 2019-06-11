import React, {useContext} from 'react'
import {EditorContext} from '../Context';
import api from '../api';

import ModalConductor from './Modals/ModalConductor'

export default () => {
    const {state, dispatch} = useContext(EditorContext)

    const createFile = () => {
      if(state.actualFile.edited) {
        dispatch({type:'OPEN_MODAL', modalType:'CREATE_FILE'})
      }
      else {
        dispatch({type:'CREATE_FILE'})
      }
    }

    const eraseAndCreateNewFile = () => {
      console.log('erase')
      dispatch({type:'ERASE_AND_CREATE_NEW_FILE'})
    } 

    const saveFile = async () => {
      dispatch({type:'SAVE_FILE'})
      try {
        const response = await api.saveFile(state.actualFile)
      } catch(e) {}

    }
    
    const closeModal = () => { dispatch({type:'CLOSE_MODAL'}) }

  return (
    <div>
      <button onClick={createFile}>Create</button>
      <button onClick={saveFile} >Save</button>
      <ModalConductor 
        closeModal={closeModal}
        eraseAndCreateNewFile={eraseAndCreateNewFile}
      />
      {/* <Modal
        on={state.modalIsOpen}
      >
          <CloseButton onClick={closeModal}>X</CloseButton>
          <p>There its a file without saved your sure you want to create a new one?</p>
          <ButtonsWrapper>
            <PrimaryButton onClick={eraseAndCreateNewFile}>Yes</PrimaryButton>
            <DangerButton onClick={closeModal}>No</DangerButton>
          </ButtonsWrapper>
      </Modal> */}

     
    </div>
  )
}

// const ButtonsWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   & > button {
//     margin-right: 5px;
//   }
// `;


