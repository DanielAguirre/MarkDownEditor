import React from 'react'
import styled from 'styled-components';
import ModalWrapper from  './ModalWapper';
import {PrimaryButton, DangerButton, CloseButton} from '../Buttons';

export default function ReadFileModal({closeModal, eraseAndReadNewFile}) {
    return (
        <ModalWrapper >
            <CloseButton onClick={closeModal}>X</CloseButton>
            <p>There its a file without saved your sure you want to open a new one?</p>
            <ButtonsWrapper>
                <PrimaryButton onClick={eraseAndReadNewFile}>Yes</PrimaryButton>
                <DangerButton onClick={closeModal}>No</DangerButton>
          </ButtonsWrapper>
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