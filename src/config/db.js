const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Conexión exitosa a la base de datos 👍')
    } catch (error) {
        console.log('La base de datos está kaput 💔')
        process.exit(1)
    }
}
module.exports = { connectDB }



