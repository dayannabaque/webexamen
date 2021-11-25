const mongoose = require("mongoose");
const {Schema} = mongoose;


//datos
const contratoparatvsSchema = new Schema({
      FechaInicio: Date,
      Tipodeservicio: String,
      Mesescontratados : Number,
      Totalcontrato: Number,
      Mesestranscurrido: Number,
      Totalabono: Number,
    }
);

 module.exports = mongoose.model('contratoparatv',contratoparatvsSchemaSchema);