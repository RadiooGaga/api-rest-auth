
const { isAdmin } = require('../../middlewares/auth');
const { 
    createGame, 
    getGames, 
    updateGame, 
    deleteGame, 
    getGameById
} = require('../controllers/videogame');

const gamesRoutes = require('express').Router();

gamesRoutes.post('/newgame',[isAdmin], createGame);
gamesRoutes.get('/', getGames);
gamesRoutes.get('/:id', getGameById);
gamesRoutes.patch('/update/:id',[isAdmin], updateGame);
gamesRoutes.delete('/delete/:id',[isAdmin], deleteGame);

module.exports = gamesRoutes;