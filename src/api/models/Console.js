
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
      "description": "Gráficos impresionantes, carga ultrarrápida y una experiencia de juego inmersiva.",
      "price": "499.99",
      "featuredGames": "Spider-Man: Miles Morales, Demon's Souls, Ratchet & Clank: Rift Apart"
    },
    {
      "name": "Xbox Series X",
      "release": "2020",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Microsoft",
      "description": "La consola de alta potencia de Microsoft que ofrece juegos en 4K, velocidades de carga rápidas y compatibilidad con versiones anteriores.",
      "price": "499.99",
      "featuredGames": "Halo Infinite, Forza Horizon 5, Gears 5"
    },
    {
      "name": "Nintendo Switch",
      "release": "2017",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Nintendo",
      "description": "Una consola híbrida que te permite jugar tanto en casa como en movimiento, con una amplia variedad de juegos exclusivos y portátiles.",
      "price": "299.99",
      "featuredGames": "The Legend of Zelda: Breath of the Wild, Animal Crossing: New Horizons, Super Mario Odyssey"
    },
    {
      "name": "PlayStation 4",
      "release": "2013",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Sony",
      "description": "La consola líder de la octava generación que ofrece una amplia biblioteca de juegos exclusivos y una sólida comunidad en línea.",
      "price": "299.99",
      "featuredGames": "God of War, The Last of Us Part II, Uncharted 4: A Thief's End"
    },
    {
      "name": "Xbox One",
      "release": "2013",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Microsoft",
      "description": "La consola de Microsoft que combina juegos, entretenimiento y aplicaciones en un único dispositivo, con una variedad de servicios en línea.",
      "price": "299.99",
      "featuredGames": "Red Dead Redemption 2, Halo 5: Guardians, Gears of War 4"
    },
    {
      "name": "Nintendo 3DS",
      "release": "2011",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Nintendo",
      "description": "Consola portátil que ofrece juegos en 3D sin gafas, con una gran biblioteca de títulos clásicos y exclusivos.",
      "price": "199.99",
      "featuredGames": "The Legend of Zelda: Ocarina of Time 3D, Pokémon X/Y, Super Mario 3D Land"
    },
    {
      "name": "PlayStation Vita",
      "release": "2011",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Sony",
      "description": "Consola portátil de Sony que ofrece gráficos impresionantes, controles táctiles y una amplia gama de juegos indie y de terceros.",
      "price": "199.99",
      "featuredGames": "Persona 4 Golden, Gravity Rush, Uncharted: Golden Abyss"
    },
    {
      "name": "Wii U",
      "release": "2012",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Nintendo",
      "description": "La consola de Nintendo que ofrece una experiencia de juego única con su controlador Wii U GamePad, permitiendo una combinación de juego asimétrico.",
      "price": "299.99",
      "featuredGames": "Super Mario 3D World, Mario Kart 8, The Legend of Zelda: The Wind Waker HD"
    },
    {
      "name": "Xbox 360",
      "release": "2005",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Microsoft",
      "description": "Consola de séptima generación de Microsoft que introdujo características como Xbox Live, Kinect y una sólida biblioteca de juegos.",
      "price": "199.99",
      "featuredGames": "Halo 3, Gears of War 2, Mass Effect"
    },
    {
      "name": "Nintendo DS",
      "release": "2004",
      "cover": "ruta/de/la/imagen.jpg",
      "manufacturer": "Nintendo",
      "description": "Una consola portátil revolucionaria que introdujo la pantalla táctil y dos pantallas, con una amplia gama de juegos divertidos y creativos.",
      "price": "149.99",
      "featuredGames": "New Super Mario Bros., Pokémon Diamond/Pearl, The Legend of Zelda: Phantom Hourglass"
    }
  ]

*/

  const consoleSchema = new mongoose.Schema(
      {
      name:  { type: String, trim: true, required: true, unique: true },
      release: { type: Number, trim: true, required: true },
      manufacturer: { type: String, trim: true, required: true },
      description: { type: String, trim: true, required: true },
      price: { type: Number, trim: true, required: true },
<<<<<<< HEAD
      featuredGames: { type: [String], trim: true, required: true }
=======
      featuredGames: { type: [String], trim: true, required: true },
      
>>>>>>> 9ca499a (first commit)
  
      }, 
      {
      timestamps: true,
      collection: "consoles"
      });
  
  const Console = mongoose.model("consoles", consoleSchema, "consoles");
  module.exports = Console;
  