const mongoose = require('mongoose');

mongoose.set('strict', false); 
mongoose.set('strictQuery', false); 
mongoose.set('strictPopulate', false); 

const gameSchema = new mongoose.Schema(
    {
    name:  { type: String, trim: true, required: true, unique: true },
    year: { type: Number, trim: true, required: true },
    type: { type: String, trim: true, required: true },
    image: { type: String, trim: true, required: true },
    price: { type: Number, trim: true, required: true },
    featuredConsoles: { type: [String], trim: true, required: true  }

    }, 
    {
    timestamps: true,
    collection: "games"
    });

const Game = mongoose.model("videogames", gameSchema, "games");
module.exports = Game;
