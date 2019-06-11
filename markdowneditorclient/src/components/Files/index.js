import React,{useContext, useEffect} from 'react';
import styled from 'styled-components';
import { EditorContext } from '../../Context'
import File from './File';
import api from '../../api';
import {primaryDark, lightGrey} from '../../utilities/colors';

export default () => {
  const {state, dispatch} = useContext(EditorContext)
  useEffect(() => {
    let results 
    async function fetchData() {
      try{
        results = await api.getFiles();
        dispatch({type:'SUCCEDED_FILES', files:results.data.files})

      } catch(e){}
     }
    dispatch({type:'FETCHING_FILES'})
    fetchData()
  }, [dispatch]);

  const openDeleteFileModal = (id) => {
    console.log('here')
    dispatch({type: 'OPEN_MODAL', modalType:'DELETE_FILE', uuid:id})
  } 

  const deleteSelectedFile = async () => {
    console.log('deleting')
    dispatch({type: 'DELETE_FILE', uuid:state.fileId})
    await api.deleteFile(state.fileId)
  }

  const readFile = (id) => {
    if(state.actualFile.edited) {
      dispatch({type:'OPEN_MODAL',  uuid:id, modalType:'READ_FILE'})
    }
    else {
      dispatch({type:'READ_FILE', uuid:id})
    }
    
  }

  const closeModal = () => { 
    dispatch({type:'CLOSE_MODAL'}) 
  }
  
  const eraseAndReadNewFile = () => {
    dispatch({type:'ERASE_AND_READ_NEW_FILE',uuid:state.fileId})
  } 

  return (
    <FilesWrapper>
      <FileHeader>
        <Title>Files</Title>
      </FileHeader>
      {state.files.map((file, index)=> { 
        return  <File 
          name={file.title} 
          editedAt={file.lastTimeEdited} 
          key={index} 
          id={file.uuid} 
          openDeleteFileModal={openDeleteFileModal}
          closeModal={closeModal}
          deleteSelectedFile={deleteSelectedFile}
          readFile={readFile}
          eraseAndReadNewFile={eraseAndReadNewFile}
          />
      })}
    </FilesWrapper>
  )
}


const FilesWrapper = styled.div`
  background-color: ${lightGrey};
  justify-self: stretch;
  text-align: center;
  border-right: 1px solid lightgrey;
  height: 100%;
  overflow: auto;
  width: 10%;
  min-width:100px;
`;

const FileHeader = styled.div`
  background-color: ${primaryDark};
  width: 100%;
  height: 34px;
  margin-bottom: 5px;
  overflow: hidden;
`;

const Title = styled.p`
  margin-top: 8px;
  padding: 0;
  color: ${lightGrey};
`;

