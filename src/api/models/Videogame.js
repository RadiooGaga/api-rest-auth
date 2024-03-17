const mongoose = require('mongoose');

mongoose.set('strict', false); 
mongoose.set('strictQuery', false); 
mongoose.set('strictPopulate', false); 


/*
const games = [
    {
        "name": "The Legend of Zelda: Breath of the Wild",
        "year": "2017",
        "type": "Acción-aventuras",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Un juego de aventuras épico que te sumerge en un vasto mundo abierto lleno de misterio y descubrimiento.",
        "price": "59.99",
        "featuredConsoles": "Nintendo Switch"
      },
      {
        "name": "Red Dead Redemption 2",
        "year": "2018",
        "type":  "Acción-aventuras",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Una aventura del Salvaje Oeste que te lleva a un viaje épico a través de la frontera americana, lleno de personajes memorables y paisajes impresionantes.",
        "price": "49.99",
        "featuredConsoles": "PlayStation 4, Xbox One"
      },
      {
        "name": "Super Mario Odyssey",
        "year": "2017",
        "type": "Plataforma",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Únete a Mario en su viaje por todo el mundo en esta emocionante aventura de plataformas llena de diversión y sorpresas.",
        "price": "49.99",
        "featuredConsoles": "Nintendo Switch"
      },
      {
        "name": "The Witcher 3: Wild Hunt",
        "year": "2015",
        "type": "Acción role-playing",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Sumérgete en un mundo de fantasía oscuro y peligroso mientras cazas monstruos y te embarcas en una búsqueda épica para encontrar a tu hija adoptiva.",
        "price": "39.99",
        "featuredConsoles": "PlayStation 4, Xbox One, PC"
      },
      {
        "name": "God of War",
        "year": "2018",
        "type":  "Acción-aventuras",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Únete a Kratos en su viaje para enfrentarse a dioses y criaturas mitológicas mientras intenta redimir su turbulento pasado.",
        "price": "49.99",
        "featuredConsoles": "PlayStation 4"
      },
      {
        "name": "Cyberpunk 2077",
        "year": "2020",
        "type": "Acción role-playing",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Explora Night City, una metrópolis futurista llena de peligro y oportunidad, en este juego de rol ambientado en un mundo de ciencia ficción.",
        "price": "59.99",
        "featuredConsoles": "PlayStation 4, Xbox One, PC"
      },
      {
        "name": "Animal Crossing: New Horizons",
        "year": "2020",
        "type": "Life simulation",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Escapa a una isla desierta y crea tu propio paraíso tropical en este juego de simulación relajante y encantador.",
        "price": "59.99",
        "featuredConsoles": "Nintendo Switch"
      },
      {
        "name": "Fortnite",
        "year": "2017",
        "type": "Battle royale",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Participa en emocionantes batallas multijugador en línea, construye estructuras y lucha por ser el último en pie en este fenómeno de los juegos de disparos.",
        "price": "39.99",
        "featuredConsoles": "PlayStation 4, Xbox One, Nintendo Switch, PC, iOS, Android"
      },
      {
        "name": "Persona 5",
        "year": "2016",
        "type": "Role-playing",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Únete a un grupo de estudiantes de secundaria que llevan una doble vida como ladrones de corazones en este emocionante juego de rol japonés.",
        "price": "39.99",
        "featuredConsoles": "PlayStation 4"
      },
      {
        "name": "Minecraft",
        "year": "2011",
        "type": "Sandbox, survival",
        "cover": "ruta/de/la/imagen.jpg",
        "description": "Construye, explora y sobrevive en un mundo generado proceduralmente lleno de bloques en este juego de aventuras creativas y de supervivencia.",
        "price": "19.99",
        "featuredConsoles": "PlayStation 4, Xbox One, Nintendo Switch, PC, iOS, Android"
      }
]

*/

const gameSchema = new mongoose.Schema(
    {
    name:  { type: String, trim: true, required: true, unique: true },
    year: { type: Number, trim: true, required: true },
    type: { type: String, trim: true, required: true },
<<<<<<< HEAD
    image: { type: String, trim: true, required: true },
    price: { type: Number, trim: true, required: true },
    featuredConsoles: { type: [String], trim: true, required: true  }
=======
    cover: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    price: { type: Number, trim: true, required: true },
    featuredConsoles: { type: [String], trim: true, required: true }
>>>>>>> 9ca499a (first commit)

    }, 
    {
    timestamps: true,
    collection: "games"
    });

const Game = mongoose.model("videogames", gameSchema, "games");
module.exports = Game;
