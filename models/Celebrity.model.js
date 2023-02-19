//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//crear movieSchema
const celebritySchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
    },
    occupation: {
        type: String,
    },
    catchphrase: {
        type: String,
    }
});
//crear modelo a partir del celebritySchema
const Celebrity = mongoose.model("Celebrity", celebritySchema);
//exportar modelo
module.exports = Celebrity;