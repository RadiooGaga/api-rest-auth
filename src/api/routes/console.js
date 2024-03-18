const { isAdmin } = require('../../middlewares/auth');
const upload = require('../../middlewares/files');


const { 
    createConsole, 
    getConsoles, 
    getConsoleById,
    updateConsoleById, 
    deleteConsoleById 
} = require('../controllers/console');

const consolesRoutes = require('express').Router();

consolesRoutes.post('/newconsole',[isAdmin], upload.single('cover'), createConsole);
consolesRoutes.get('/', getConsoles);
consolesRoutes.get('/:id', getConsoleById);
consolesRoutes.put('/update/:id',[isAdmin],upload.single('cover'), updateConsoleById);
consolesRoutes.delete('/delete/:id',[isAdmin],upload.single('cover'), deleteConsoleById);


module.exports = consolesRoutes;
