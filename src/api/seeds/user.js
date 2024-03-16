/*

const mongoose = require('mongoose');
const User = require('../models/User');

// Conexión de nuevo a la DB e inserto de los documentos
mongoose.connect(process.env.DB_URL, {})

  .then(async () => {
    const allUsers = await User.find(); 

    if (allUsers.length) {
      await User.collection.drop(); //Si hay usuarios, se borra la colección

    }
  })
  .catch((err) => console.log(`Error borrando los usuarios: ${err}`))
  .then(async () => {
		await User.insertMany(userDocuments);// metemos usuarios una vez vaciada la DB
	})
  .catch((err) => console.log(`Error creando los usuarios: ${err}`))
  .finally(() => mongoose.disconnect());
  // Desconexión final de la DB.

  */