const mongoose = require('mongoose');

mongoose.set('strict', false); 
mongoose.set('strictQuery', false); 
mongoose.set('strictPopulate', false); 


/*
const games = [
  {
    "name": "Zelda",
    "year": "2017",
    "type": "Acción-aventuras",
    "cover": "ruta/de/la/imagen.jpg",
    "description": "Un juego de aventuras blablabla",
    "price": "59.99",
    "featuredConsoles": "Nintendo Switch"
  }
]
*/

const gameSchema = new mongoose.Schema(
    {
    name:  { type: String, trim: true, required: true, unique: true },
    year: { type: Number, trim: true, required: true },
    category: { type: [String], trim: true, required: true, enum: 
      ["Acción", "Aventuras", "Plataforma","Roleplay", "life simulation", 
      "Battler royale", "Sandbox", "Survival","RPG", "Shooter", "Ciencia ficción", 
      "Carreras", "Mundo abierto"]},
    cover: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    price: { type: Number, trim: true, required: true },
    featuredConsoles: { type: [String], trim: true, required: true },
    verified: {type: Boolean, required: true, default:false} 


    }, 
    {
    timestamps: true,
    collection: "games"
    });

const Game = mongoose.model("videogames", gameSchema, "games");
module.exports = Game;
