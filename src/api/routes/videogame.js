
const { isAdmin } = require('../../middlewares/auth');
const { upload } = require('../../middlewares/files');

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
<<<<<<< HEAD
gamesRoutes.patch('/update/:id',[isAdmin], updateGame);
gamesRoutes.delete('/delete/:id',[isAdmin], deleteGame);
=======
gamesRoutes.put('/update/:id',[isAdmin], updateGameById);
gamesRoutes.patch('/update/:id',[isAdmin], upload.single('cover'), updateGameById)
gamesRoutes.delete('/delete/:id',[isAdmin], deleteGameById);

>>>>>>> 9ca499a (first commit)

module.exports = gamesRoutes;