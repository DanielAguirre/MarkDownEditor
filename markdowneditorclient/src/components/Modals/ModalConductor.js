import React, {useContext} from 'react';
import { EditorContext } from '../../Context';
import CreateFileModal from './CreateFileModal';
import ReadFileModal from './ReadFileModal';
import DeleteFileModal from './DeleteFileModal';

export default function ModalConductor(props) {
    const { state } = useContext(EditorContext);

    switch (state.currentModal) {
        case 'CREATE_FILE':
            return <CreateFileModal  {...props }/>
        case 'READ_FILE':
            if(props.eraseAndReadNewFile){
                return <ReadFileModal  {...props }/>
            } else {
                return null;
            }

        case 'DELETE_FILE':{
            if(props.deleteSelectedFile){
                return <DeleteFileModal  { ...props }/>
            } else {
                return null;
            }
        }
        default:
            return null;
    }
    
}
