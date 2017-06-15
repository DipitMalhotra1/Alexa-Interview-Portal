/**
 * Created by dipit on 6/13/17.
 */
var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var statusSchema= new Schema({
    isFinished:Boolean,
});


var Status = mongoose.model('Status', statusSchema);

module.exports = Status;