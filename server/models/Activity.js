
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ActivitySchema = new Schema({
   donateTo:{
       type:String,
       required:true
   } ,
   donationType:{
       type:String,
       required:true
   },
   photo:{
       type:Buffer
   },
   shareTheMoney:{
       type:String,
       required:true
   },
   image: {
        type: String,
         required: true }
})

module.exports = mongoose.model('Activity',ActivitySchema);
