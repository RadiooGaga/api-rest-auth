const Console = require('../models/Console');
const Game = require('../models/Videogame');
const { deleteImgCloudinary } = require('../../utils/deleteFiles');

//crear consola (solo admin)
const createConsole = async (req, res, next) => {
    try {
        // Crearemos una instancia de la consola con los datos enviados
    const newConsole = new Console({
        name:  req.body.name,
        released: req.body.released,
        cover: req.body.cover,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        price: req.body.price,
        featuredGames: req.body.featuredGames
    })
    if (req.file) {
        //en el caso de que venga su ruta se añadirá al campo "cover" de nuestra nueva consola
        newConsole.cover = req.file.path;
      }

    // Guardamos la consola en la DB
    const consoleDB = await newConsole.save();
    return res.status(201).json({console: consoleDB, message: 'consola creada!'});
      
  } catch (error) {
      console.log("error al crear la consola")
      return res.status(400).json(error)
  } 
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


//PATCH actualizar consola (solo admin)
const updateConsoleById = async (req, res, next) => {
    try {
        const { id } = req.params 
        const newConsole = new Console(req.body);
        newConsole._id = id;

        if (req.file){
            newConsole.cover = req.file.path;
            const oldConsole = await Console.findByIdAndUpdate(id);
            deleteImgCloudinary(oldConsole.cover);
        }

        const updatedConsole = await Console.findByIdAndUpdate(id, newConsole, {new: true});
        return res.status(200).json({console: updatedConsole, message: 'Consola actualizada!'});
        
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