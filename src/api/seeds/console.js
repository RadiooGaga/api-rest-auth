/*

const mongoose = require('mongoose');
const Console = require('../models/Console');

// Conexión de nuevo a la DB e inserto de los documentos
mongoose.connect(process.env.DB_URL, {})

  .then(async () => {
    const allConsoles = await Console.find(); 

    if (allConsoles.length) {
      await Console.collection.drop(); //Si hay consolas, se borra la colección

    }
  })
  .catch((err) => console.log(`Error borrando las consolas: ${err}`))
  .then(async () => {
		await Console.insertMany(consoleDocuments);// metemos consolas una vez vaciada la DB
	})
  .catch((err) => console.log(`Error creando las consolas: ${err}`))
  .finally(() => mongoose.disconnect());
  // Desconexión final de la DB.

  */