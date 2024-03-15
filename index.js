require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./src/config/db');


const usersRoutes = require("./src/api/routes/user");
const gamesRoutes = require("./src/api/routes/videogame");
const consolesRoutes = require("./src/api/routes/console");


const app = express();


connectDB();

//! configurando mi servidor para que sea capaz de interpretar formatos json que le  envío.
app.use(express.json());
app.use(cors());


app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/games', gamesRoutes);
app.use('/api/v1/consoles', consolesRoutes);





app.use('*', (req, res, next) => {
    return res.status(404).json('Ruta no encontrada');
})

app.listen(3002,() => {
   
    console.log("El servidor está funcionando en http://localhost:3002");
})


