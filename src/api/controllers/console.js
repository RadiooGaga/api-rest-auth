const mongoose = require('mongoose');
const Console = require('../models/Console');
const Game = require('../models/Videogame');

//crear consola
const createConsole = async (req, res, next) => {
    try {
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


//actualizar consola 
const updateConsole = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedConsole = await Console.findByIdAndUpdate(id, req.body, { new: true }).lean();
        console.log('La consola se ha actualizado', updatedConsole);
        return res.status(200).json(updatedConsole); 
        
        } catch (error){
            return res.status(400).json('Error al actualizar la consola', error) 
        }
} 


//borrar consola
const deleteConsole = async (req, res, next) => {
    try {
        const { id } = req.params;
        const consoleDeleted = await Console.findByIdAndDelete(id).lean();
        return res.status(200).json({
        message: "Consola eliminada",
        consoleDeleted
        });
        
    } catch (error) {
        return res.status(400).json('Error al eliminar la consola', error);
    }
};



module.exports = { createConsole, getConsoles, getConsoleById, updateConsole, deleteConsole }