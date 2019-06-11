import React, {useContext} from 'react'
import styled from 'styled-components';
import Actions from './Actions';
import { EditorContext } from '../Context';
import {lightGrey} from '../utilities/colors';

const Editor = () => {
  
  const {state, dispatch} = useContext(EditorContext);
  const {actualFile} = state;
  
  const updateContent = (event) => {
    dispatch({type: 'UPDATE_CONTENT', content: event.target.value})
  }

  const updateTitle = (event) => {
    dispatch({type: 'UPDATE_TITLE', title: event.target.value})
  }

  return (
    <EditorWrapper>
      <Actions />
      <TitleWrapper>
        <label htmlFor='title'>Title:</label>
        <input 
          id='title'
          type="text"
          placeholder="Untitle Document"
          onChange={updateTitle}
          value={actualFile.title}
        />
      </TitleWrapper>
      <TextAreaWrapper
        onChange={updateContent}
        value={actualFile.content || ''}
        placeholder="Document"
      >
      </TextAreaWrapper>
    </EditorWrapper>
  )
}

const EditorWrapper = styled.div`
    text-align: center;
    border-right: 1px solid lightgrey;
    overflow: hidden;
    height:100%;
    width: 45%;
    /* background-color: ${lightGrey}; */
`;

const TitleWrapper = styled.div`
  margin-top: 7px;
  margin-bottom: 5px;
  & > label {
    margin-right: 10px;
  }
`;

const TextAreaWrapper = styled.textarea`
  width: 95%;
  height: 85%;
  margin: 10px 5px;
  /* font-family: inherit;
  border: 1px solid #d2d2d2;
  outline: 0;
  font-size: 16px;
  color: #212121;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s; */
`;


export default Editor