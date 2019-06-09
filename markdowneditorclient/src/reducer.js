import uuidv4 from 'uuid/v4';

export const initialState = {
    files:[],
    actualFile:{
        content: '',
        title:'',
        editable: false,
        edited: false
    },
}

let reducer = (state, action) => {
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
            // if(!actualFile.uuid) {
            actualFile.uuid = uuidv4()
            // }
            console.log('pasa aqui')
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
                modalDeleteFileIsOpen: false
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
                modalIsOpen: false
            } 
        case 'OPEN_MODAL': 
            return {
                ...state,
                modalIsOpen: true
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalIsOpen: false
            }
        case 'OPEN_MODAL_DELETE_FILE':
                return {
                    ...state,
                    modalDeleteFileIsOpen: true
                }
        case 'CLOSE_MODAL_DELETE_FILE':
            return {
                ...state,
                modalDeleteFileIsOpen: false
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
        default: 
            return state
        
    }
}

export default reducer