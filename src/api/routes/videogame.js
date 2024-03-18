
const { isAdmin } = require('../../middlewares/auth');
const upload = require('../../middlewares/files');

const { 
    createGame, 
    getGames, 
    updateGameById, 
    deleteGameById, 
    getGameById
} = require('../controllers/videogame');

const gamesRoutes = require('express').Router();

gamesRoutes.post('/newgame',[isAdmin], upload.single('cover'), createGame)
gamesRoutes.get('/', getGames);
gamesRoutes.get('/:id', getGameById);
gamesRoutes.put('/update/:id',[isAdmin], upload.single('cover'), updateGameById);
gamesRoutes.delete('/delete/:id',[isAdmin],upload.single('cover'), deleteGameById);



module.exports = gamesRoutes;