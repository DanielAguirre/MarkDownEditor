import React, {useContext, useEffect} from 'react'
import styled from 'styled-components';
import { ReactComponent as FileIcon } from '../../Icons/documento.svg'
import { ReactComponent as GarbageIcon } from '../../Icons/basura.svg';
import Modal from '../Modal';
import ModalConductor from '../Modals/ModalConductor';
import {PrimaryButton, DangerButton, CloseButton} from '../Buttons';
import { EditorContext } from '../../Context';
import api from '../../api';

export default ({
  name,
  editedAt,
  id, 
  readFile, 
  openDeleteFileModal, 
  closeModal, 
  deleteSelectedFile, 
  eraseAndReadNewFile
}) => {

  const readeSelectedFile = () => {
    readFile(id)
  }
  const openDeleteMOdal = () => {
    openDeleteFileModal(id);
  }
  return (
    <div>
      <ButtonWrapper>
        <Button onClick={readeSelectedFile} >
          <FileIcon />
        </Button>
        <Button onClick={openDeleteMOdal}>
          <GarbageIcon />
        </Button>
      </ButtonWrapper>
      <TimeWrapper> {editedAt} </TimeWrapper>
      <TitleWrapper> {name} </TitleWrapper>
      <ModalConductor 
        closeModal={closeModal} 
        eraseAndReadNewFile={eraseAndReadNewFile} 
        deleteSelectedFile={deleteSelectedFile} />

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
