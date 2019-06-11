import React from 'react'
import styled from 'styled-components';
import ModalWrapper from  './ModalWapper';
import {PrimaryButton, DangerButton, CloseButton} from '../Buttons';

const  DeleteFileModal = ({closeModal, deleteSelectedFile, ...otherProps})  => {
    return (
        <ModalWrapper >
            <CloseButton onClick={closeModal}>X</CloseButton>
            <p>Do you want to delete this file?</p>
            <ButtonsWrapper>
                <PrimaryButton onClick={deleteSelectedFile}>Yes</PrimaryButton>
                <DangerButton onClick={closeModal}>No</DangerButton>
            </ButtonsWrapper>
      </ModalWrapper>
    )
}

export default DeleteFileModal

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & > button {
    margin-right: 5px;
  }
`;