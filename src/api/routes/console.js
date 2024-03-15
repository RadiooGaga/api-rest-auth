const { isAdmin } = require('../../middlewares/auth');
const { 
    createConsole, 
    getConsoles, 
    getConsoleById,
    updateConsole, 
    deleteConsole 
} = require('../controllers/console');

const consolesRoutes = require('express').Router();

consolesRoutes.post('/newconsole',[isAdmin], createConsole);
consolesRoutes.get('/', getConsoles);
consolesRoutes.get('/:id', getConsoleById);
consolesRoutes.patch('/update/:id',[isAdmin], updateConsole);
consolesRoutes.delete('/delete/:id',[isAdmin], deleteConsole);

module.exports = consolesRoutes;