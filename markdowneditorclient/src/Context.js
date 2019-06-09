import React, { useReducer } from 'react';
import reducer, { initialState } from './reducer';

const EditorContext = React.createContext(initialState);

function EditorProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <EditorContext.Provider value={{state, dispatch}}>
            {props.children}
        </EditorContext.Provider>
    )
}


export { EditorContext, EditorProvider };