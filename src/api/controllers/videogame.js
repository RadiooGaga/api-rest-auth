const mongoose = require('mongoose');
const Game = require('../models/Videogame');
const Console = require('../models/Console');

//crear juego
const createGame = async (req, res, next) => {
    try {
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
        
    } catch (error) {
        console.log("error al crear videojuego")
        return res.status(400).json(error)
    }
}

//obtener juegos
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
        console.log(getGameById);
        return res.status(200).json(getGameById);
        
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

const updateGame = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedGame = await Game.findByIdAndUpdate(id, req.body, { new: true }).lean();
        console.log('El juego se ha actualizado', updatedGame);
        return res.status(200).json(updatedGame); 
        
        } catch (error){
            return res.status(400).json('Error al actualizar el juego', error) 
        }
} 

const deleteGame = async (req, res, next) => {
    try {
        const { id } = req.params;
        const gameDeleted = await Game.findByIdAndDelete(id).lean();
        return res.status(200).json({
        message: "Juego eliminado",
        gameDeleted
        });
        
    } catch (error) {
        return res.status(400).json('Error al eliminar el juego', error);
    }
};



module.exports = { createGame, getGames, getGameById,updateGame, deleteGame }