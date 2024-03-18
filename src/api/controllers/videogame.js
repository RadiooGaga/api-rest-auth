const Game = require('../models/Videogame');
const Console = require('../models/Console');

const { deleteImgCloudinary } = require('../../utils/deleteFiles');

//crear juego POST
const createGame = async (req, res, next) => {
    try {
     
          // Crearemos una instancia deL juego con los datos enviados
      const newGame = new Game({
        name:  req.body.name,
        year: req.body.year,
        category: req.body.category,
        cover: req.body.cover,
        description: req.body.description,
        price: req.body.price,
        featuredConsoles:req.body.featuredConsoles
      })

      if (req.file) {
        //en el caso de que venga su ruta se añadirá al campo "cover" de nuestro nuevo juego
        newGame.cover = req.file.path;
      }

      if (req.user.rol === "admin") {
        newGame.verified = true;
      } else {
        newGame.verified = false;
      }
      
  
      // Guardamos el juego en la DB
      const gameDB = await newGame.save();
      return res.status(201).json({game: gameDB, message: 'videojuego creado!'});
        
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
            path: 'featuredConsoles',
            model: Console,
            select: {
                _id: true,
                name: true,
            },
        }).lean();
        
        return res.status(200).json(getGameById);
        
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}


//PATCH actualizar videojuego (solo admin)
const updateGameById = async (req, res, next) => {
    try {
        const { id } = req.params 
        const newGame = new Game(req.body);
        newGame._id = id;
        const games = req.body.games || [];

        if (req.file){
            newGame.cover = req.file.path;
            const oldGame = await Game.findByIdAndUpdate(id);
            deleteImgCloudinary(oldGame.cover);
        }

    

        const updatedGame = await Game.findByIdAndUpdate(id, newGame, {new: true});
        return res.status(200).json({game: updatedGame, message: 'Juego actualizado!'})
        
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