const mongoose = require('mongoose');
const fileModel = mongoose.model('File')

const FileController = {
    async getFiles(req, res){
        const files = await fileModel.find().sort({ created: 'desc' })
        res.json({files})
    },
    getFile:(req, res) => {

    },
    async saveFile(req,res) {
        const query = {uuid:req.body.uuid};
        const fileDocument = req.body.data;
        const options = { upsert: true, new: true};
        try{
            const file = await fileModel.findOneAndUpdate(query, fileDocument, options)

            res.status(201).json({file})
        } catch(e) {
            console.error(e.message)
        }
    },
    async updateFile(req,res){
        const file = await fileModel.findOneAndUpdate(req.body.uuid, {new: true});
        res.status(201).json({file})
    },
    async deleteFile(req, res) {
        console.log('params',req.params)
        const query = { uuid: req.params.id };
        await fileModel.findByIdAndRemove(query)
        res.status(200).json()
    },
    async deleteAll(req,res) {
        await fileModel.deleteMany({})
        res.status(200).json()
    }
}

module.exports = FileController;