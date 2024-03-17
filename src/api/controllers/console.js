const mongoose = require('mongoose');
const Console = require('../models/Console');
const Game = require('../models/Videogame');
<<<<<<< HEAD
=======
const { deleteImgCloudinary } = require('../../middlewares/files');
>>>>>>> 9ca499a (first commit)

//crear consola (solo admin)
const createConsole = async (req, res, next) => {
    try {
<<<<<<< HEAD
        const newConsole = new Console(
            {
                name:  req.body.name,
                release: req.body.release,
                manufacturer: req.body.manufacturer,
                price: req.body.price,
                featuredGames: req.body.featuredGames
                
            })
            const consoleSaved = await newConsole.save();
            console.log("consola guardada!")
            return res.status(201).json(consoleSaved);
        
    } catch (error) {
        console.log("error al crear consola")
        return res.status(400).json(error)
    }
=======
        // Crearemos una instancia de la consola con los datos enviados
    const newConsole = new Console({
        name:  req.body.name,
        release: req.body.release,
        cover: req.body.cover,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        price: req.body.price,
        featuredGames: req.body.featuredGames
    })
    if (req.file) {
        //en el caso de que venga su ruta se añadirá al campo "cover" de nuestro nuevo juego
        newConsole.cover = req.file.path;
      }

    // Guardamos la consola en la DB
    const consoleDB = await newConsole.save();
    return res.status(201).json({console: consoleDB, message: 'consola creada!'});
      
  } catch (error) {
      console.log("error al crear la consola")
      return res.status(400).json(error)
  }
>>>>>>> 9ca499a (first commit)
}


//obtener consolas
const getConsoles = async (req, res, next) => {
    try {
        const consoles = await Console.find();
        return res.status(200).json(consoles);
        
    } catch (error) {
        return res.status(400).json(error)
    }
}


//obtener consolas por id
const getConsoleById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const consoleById = await Console.findById(id).populate({
            path: 'featuredGames',
            model: Game,
            select: {
                _id: true,
                name: true,
                type:true,
            },
        }).lean();
        return res.status(200).json(consoleById);
        
    } catch (error) {
        return res.status(400).json(error)
    }
}


//actualizar consola (solo admin)
const updateConsoleById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedConsole = await Console.findByIdAndUpdate(id, 
            {...req.body, cover: req.file ? req.file.path : 'not image'},
            { new: true }).lean();
        console.log('La consola se ha actualizado', updatedConsole);
        return res.status(200).json({game: updatedConsole, message: 'Consola actualizada!'})
        
        } catch (error){
            return res.status(400).json('Error al actualizar la consola', error) 
        }
} 


//borrar consola (solo admin)
const deleteConsoleById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const consoleToDelete = await Console.findByIdAndDelete(id);
        if (!consoleToDelete) {
            return next("Consola no encontrada");
        }
    
        if (consoleToDelete.cover) {
          deleteImgCloudinary(consoleToDelete.cover);
        }
        return res.status(200).json({ 
        message: '¡Consola borrada!',
        consoleToDelete
     });
       
    } catch (error) {
        return res.status(400).json('Error al eliminar la consola', error);
    }
  };



module.exports = { createConsole, getConsoles, getConsoleById, updateConsoleById, deleteConsoleById }