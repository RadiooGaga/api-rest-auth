
  const mongoose = require('mongoose');

  mongoose.set('strict', false); 
  mongoose.set('strictQuery', false); 
  mongoose.set('strictPopulate', false); 
  
/*
  const consoles = [
    {
      "name": "PlayStation 5",
      "release": "2020",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Sony",
      "description": "Gráficos impresionantes blablabla",
      "price": "499.99",
      "featuredGames": "Spider-Man: Miles Morales, Demon's Souls, Ratchet & Clank: Rift Apart"
    }
  ]

*/

  const consoleSchema = new mongoose.Schema(
      {
      name:  { type: String, trim: true, required: true, unique: true },
      released: { type: Number, trim: true, required: true },
      manufacturer: { type: String, trim: true, required: true },
      description: { type: String, trim: true, required: true },
      price: { type: Number, trim: true, required: true },
      featuredGames: { type: [String], trim: true, required: true },
      cover: { type: String, trim: true, required: true }
  
      }, 
      {
      timestamps: true,
      collection: "consoles"
      });
  
  const Console = mongoose.model("consoles", consoleSchema, "consoles");
  module.exports = Console;
  