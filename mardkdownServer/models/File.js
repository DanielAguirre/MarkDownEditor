const mongoose = require('mongoose');
const moment = require('moment')

const fileSchema = new mongoose.Schema({
    title:{
        type:String,
        required: 'Your file must have a title'
    },
    content:{
        type:String,
        default: ''
    },
    uuid: {
        type:String,
    }
}, {
    toJSON: { virtuals:true },
    toObject: {virtuals: true },
});

fileSchema.set('timestamps', true);
fileSchema.virtual('lastTimeEdited').get(function() {
    const now = moment();
    const edited = moment(this.updatedAt);
    console.log(now.to(edited))
    const lastEdited = now.to(edited);
    // const lastEdited = moment(now).diff(moment(this.updatedAt), 'days');
    // console.log({lastEdited})
    return lastEdited;
})
console.log('register')
module.exports = mongoose.model('File', fileSchema);
