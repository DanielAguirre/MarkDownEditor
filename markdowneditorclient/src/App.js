import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';

import {EditorProvider, EditorContext} from './Context';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Files from './components/Files'
import Portal from './utilities/Portal';

function App() {
  const {state, dispatch} = useContext(EditorContext);
   console.log({state})
  return (
    <EditorProvider>
      <AppWrapper className="App">
        <Files />
        <Editor />
        <Preview />
      </AppWrapper>
    </EditorProvider>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  height: 100%;
  border: 1px solid lightgrey;
  align-items: stretch;
  height: 90vh;
`;
export default App;
