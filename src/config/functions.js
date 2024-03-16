/*


const mongoose = require('mongoose');
const Game = require('../api/models/Videogame');
const Console = require('../api/models/Console');


const deleteAndReload = async () => {
    
    try {
        const games = await Game.find();
        const consoles = await Console.find();

        for (const consolee of consoles) {
            await Console.findByIdAndUpdate( consolee._id, { featuredGames: [] }, { new: true }).lean();
        }

        for (const game of games) {

            const consolesForGames = game.featuredConsoles;

            for (const consoleId of consolesForGames) {
                const consola =  await Console.findById(consoleId);
                consola.featuredGames.push(game._id)
                const updated = await Console.findByIdAndUpdate( consoleId, { featuredGames: consola.featuredGames }, { new: true }).lean();
                console.log(updated)
            }
        }
    
    } catch (error) {
        console.log("Error al actualizar las consolas:", error);
    }
}


   
module.exports = deleteAndReload;

*/

