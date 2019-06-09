import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/',
});

const api = {
    saveFile: (data) => {
        return instance.post('file',{
            data
        })
    },
    getFiles: () => {
        return instance.get('file')
    },
    deleteFile:(id) => {
        return instance.delete('file/'+id)
    }
    
}

export default api;