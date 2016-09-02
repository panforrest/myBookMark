var mongoose = require('mongoose')

var EntrySchema = new mongoose.Schema({
    
    title: {type:String, trim:true, default:''},
    image: {type:String, trim:true, default:''},
    description: {type:String, trim:true, default:''},
    phone: {type:String, trim:true, default:''},
    profile: {type:String, trim:true, default:''},
    url: {type:String, trim:true, default:''},
    timestamp: {type:Date, default:Date.now}

})

// EntrySchema.methods.summary = function(){
//     var summary = {
//     	title: this.title,
//     	description: this.description,
//     	phone: this.description,
//     	timestamp: this.timestamp,
//     	id: this.id
//     }

//     return summary
// }

module.exports = mongoose.model('EntrySchema', EntrySchema)

