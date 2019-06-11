import React from 'react';
import styled from 'styled-components';
import ModalWrapper from  './ModalWapper';
import {PrimaryButton, DangerButton, CloseButton} from '../Buttons';

export default function CreateFileModal({closeModal, eraseAndCreateNewFile, deleteSelectedFile}) {
    console.log('create')
    return (
        <ModalWrapper >
            <div>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <p>There its a file without saved your sure you want to create a new one?</p>
                <ButtonsWrapper>
                    <PrimaryButton onClick={eraseAndCreateNewFile}>Yes</PrimaryButton>
                    <DangerButton onClick={closeModal}>No</DangerButton>
                </ButtonsWrapper>
            </div>
      </ModalWrapper>
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
