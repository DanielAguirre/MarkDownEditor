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

  return (
    <FilesWrapper>
      <FileHeader>
        <Title>Files</Title>
      </FileHeader>
      {state.files.map((file, index)=> { 
        return  <File name={file.title} editedAt={file.lastTimeEdited} key={index} id={file.uuid}/>
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

