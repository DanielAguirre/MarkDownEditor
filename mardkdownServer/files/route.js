const express = require('express');
const userController = require('./controller');
const urls = express.Router();

console.log(userController.getFile)

urls.route('/api/file')
    .get(userController.getFiles)
    .post(userController.saveFile)
    ;

urls.route('/api/file/:id')
     .delete(userController.deleteFile)


module.exports =urls;