
  const mongoose = require('mongoose');

  mongoose.set('strict', false); 
  mongoose.set('strictQuery', false); 
  mongoose.set('strictPopulate', false); 
  
  const consoleSchema = new mongoose.Schema(
      {
      name:  { type: String, trim: true, required: true, unique: true },
      release: { type: Number, trim: true, required: true },
      manufacturer: { type: String, trim: true, required: true },
      price: { type: Number, trim: true, required: true },
      featuredGames: { type: String, trim: true, required: true }
  
      }, 
      {
      timestamps: true,
      collection: "consoles"
      });
  
  const Console = mongoose.model("consoles", consoleSchema, "consoles");
  module.exports = Console;
  