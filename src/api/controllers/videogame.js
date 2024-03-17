const mongoose = require('mongoose');
const Game = require('../models/Videogame');
const Console = require('../models/Console');
<<<<<<< HEAD
=======
const { deleteImgCloudinary } = require('../../middlewares/files');
>>>>>>> 9ca499a (first commit)

//crear juego POST
const createGame = async (req, res, next) => {
    try {
<<<<<<< HEAD
        const newGame = new Game(
            {
                name: req.body.name,
                year: req.body.year,
                type: req.body.type,
                price: req.body.price,
                featuredConsoles: req.body.featuredConsoles,
                
            })

            const gameSaved = await newGame.save();
            console.log("videojuego guardado!")
            return res.status(201).json(gameSaved);
=======
          // Crearemos una instancia deL juego con los datos enviados
      const newGame = new Game({
        name:  req.body.name,
        year: req.body.year,
        type: req.body.type,
        cover: req.body.cover,
        description: req.body.description,
        price: req.body.price,
        featuredConsoles:req.body.featuredConsoles
      })

      if (req.file) {
        //en el caso de que venga su ruta se añadirá a el campo "cover" de nuestro nuevo juego
        newGame.cover = req.file.path;
      }
  
      // Guardamos el juego en la DB
      const gameDB = await newGame.save();
      return res.status(201).json({game: gameDB, message: 'videojuego creado!'});
>>>>>>> 9ca499a (first commit)
        
    } catch (error) {
        console.log("error al crear videojuego")
        return res.status(400).json(error)
    }
}


//obtener juegos GET
const getGames = async (req, res, next) => {
    try {
        const games = await Game.find();
        return res.status(200).json(games);
        
    } catch (error) {
        return res.status(400).json(error)
    }
}

const getGameById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const getGameById = await Game.findById(id).populate({
<<<<<<< HEAD
            path: 'featuredConsoles',
            model: Console,
            select: {
                _id: true,
                name: true,
            },
        }).lean();
        console.log(getGameById);
=======
          path: 'featuredConsoles',
          model: Console,
          select: {
              _id: true,
              name: true,
          },
      }).lean();
>>>>>>> 9ca499a (first commit)
        return res.status(200).json(getGameById);
        
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}



const updateGameById = async (req, res, next) => {
    try {
        const { id } = req.params 
        const updateGame = await Game.findByIdAndUpdate(id, 
          {...req.body, cover: req.file ? req.file.path : 'not image'},
          { new: true }
        )
        return res.status(200).json({game: updateGame, message: 'Juego actualizado!'})
        
        } catch (error){
            return res.status(400).json('Error al actualizar el juego', error) 
        }
} 

const deleteGameById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const gameToDelete = await Game.findByIdAndDelete(id);

        if (!gameToDelete) {
            return next("Juego no encontrado");
        }
        
        if (gameToDelete.cover) {
          deleteImgCloudinary(gameToDelete.cover);
        }
        return res.status(200).json({ 
        message: '¡Juego borrado!',
        gameToDelete
     });
       
    } catch (error) {
        return res.status(400).json('Error al eliminar el juego', error);
    }
  };


module.exports = { createGame, getGames, getGameById, updateGameById, deleteGameById }