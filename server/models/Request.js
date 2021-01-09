const mongoose = require('mongoose')
const Schema = mongoose.Schema


const RequestSchema = new Schema({
desc_problem:{
    type:String,
    required:true
},
desc_need:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},
help_required_for:{
    type:String,
    required:true
},
no_of_persons:{
    type:Number,
    required:true
}

})
const Request = mongoose.model("Request",RequestSchema)
module.exports = Request