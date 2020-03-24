const moongose = require("mongoose");
const { Schema } = moongose;

const TechnologySchema = new Schema(
    {
        name : { type : String , maxlength : 50},
        description : { type : String },
        logo : { type : String},
        tags : [{ type : String}]
    },
    {   timestamps : { createdAt : true , updatedAt : true } }
);

module.exports = moongose.model("Technology", TechnologySchema);