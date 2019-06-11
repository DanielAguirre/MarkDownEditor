import uuidv4 from 'uuid/v4';

export const initialState = {
    files:[],
    actualFile:{
        content: '',
        title:'',
        editable: false,
        edited: false
    },
    on:false,
    currentModal:''
}

let reducer = (state=initialState, action) => {
    let actualFile;
    switch(action.type) {
        case 'CREATE_FILE':
            let newState  = Object.assign([],state.files);
            let newFile = {
                uuid: uuidv4(),
                content:'',
                title: '',
                editable: true
            };

            newState.push(newFile)
            return {
                ...state,
                actualFile: newFile
            };            
        case 'UPDATE_CONTENT':
            actualFile = state.actualFile
            actualFile.content = action.content
            actualFile.edited = true
            return {
                ...state,
                actualFile
            }
        case 'UPDATE_TITLE':
            actualFile = state.actualFile;
            actualFile.title = action.title;
            actualFile.edited = true;
            return {
                ...state,
                actualFile
            }
        case 'SAVE_FILE': {
            actualFile = state.actualFile;
            actualFile.lastChange = new Date();
            actualFile.edited = false;
            if(!actualFile.uuid) {
                actualFile.uuid = uuidv4()
            }

            if(state.files.some(file => file.uuid === actualFile.uuid)){
                state.files.map(file => {
                    if(file.uuid === actualFile.uuid){
                        file.title = actualFile.title
                        file.content = actualFile.content
                    }
                    return file
                })
            } else {
                state.files.push(actualFile);
            }
            
            return {
                ...state,
                actualFile
            }
        }

        case 'DELETE_FILE':
            const files = state.files.filter(file => {
                return file.uuid !== action.uuid
            });
            
            return {
                ...state,
                files,
                currentModal: null
            }

        case 'ERASE_AND_CREATE_NEW_FILE':
            return {
                ...state,
                actualFile: {
                    content: '',
                    title:'',
                    editable: false,
                    edited: false
                },
                currentModal: false
            }
        case 'FETCHING_FILES':
            return {
                ...state
            }
        case 'SUCCEDED_FILES':
            return {
                ...state,
                files: action.files
            } 
        case 'READ_FILE':
            const file = state.files.filter(file => {
                return file.uuid === action.uuid
            })
            return {
                ...state,
                actualFile: file[0]
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                fileId: action.uuid,
                currentModal: action.modalType
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                currentModal: null
            }
        case 'ERASE_AND_READ_NEW_FILE':
             console.log(action.uuid, state.files)
            const readFile = state.files.filter(file => {
                return file.uuid === action.uuid
            });
            return {
                ...state,
                actualFile: readFile[0],
                modalReadFileIsOpen: false,
                currentModal: null
            }
        default: 
            return state
        
    }
}

export default reducer