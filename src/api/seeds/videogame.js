/*
const mongoose = require('mongoose');

//importamos el modelo Game en este nuevo archivo
const Game = require('../models/Videogame');

// Conexión de nuevo a la DB e inserto de los documentos
mongoose.connect(process.env.DB_URL, {})

  .then(async () => {
    const allGames = await Game.find(); 

    if (allGames.length) {
      await Game.collection.drop(); //Si hay juegos, se borra la colección

    }
  })
  .catch((err) => console.log(`Error borrando las juegos: ${err}`))
  .then(async () => {
		await Game.insertMany(gameDocuments);// metemos juegos una vez vaciada la DB
	})
  .catch((err) => console.log(`Error creando las juegos: ${err}`))
  .finally(() => mongoose.disconnect());
  // Desconexión final de la DB.

  */