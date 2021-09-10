const Discord = require('discord.js');
const { Options, getMove, getResult, getContent } = require('./utility');

class fight {
    constructor(client, options = {}) {
        this.client = client;
        this.options = new Options(options);
    }

    /**
     * An solo mode for fighting game, User VS Bot.
     * @param {Discord.Message} message The messages in which command was used
     */
    async solo(message) {
        let userHealth = 100, botHealth = 100, userTiemout = [];
        let msg = await message.channel.send({ embeds: [{ color: "DARK_NAVY", title: "The Game has started" }] });

        while (userHealth > 0 && botHealth > 0) {
            const userChoice = await getMove.bind(this)(message.author, message, userTiemout);
            const player2Choice = Math.ceil(Math.random() * 3);

            if (userChoice === "end" || (userChoice !== 1 && userChoice !== 2 && userChoice !== 3)) break;

            const result = getResult.bind(this)(userChoice, userHealth, userTiemout, player2Choice, botHealth, []);

            userHealth = result.P1health;
            botHealth = result.P2health;
            userTiemout = result.P1timeout;

            const userMove = userChoice === 1 ? this.options.oneName : userChoice === 2 ? this.options.twoName : this.options.threeName;
            const user2Move = player2Choice === 1 ? this.options.oneName : player2Choice === 2 ? this.options.twoName : this.options.threeName;

            let content = getContent(result, message.author, this.client.user, userMove, user2Move);
            let title = "Everyone chose their moves, Current Condtions :";

            if (userHealth < 1) title = "Game Ended, Krazy Bot Won 👑";
            else if (botHealth < 1) title = `Game Ended, ${message.author.username} Won 👑`;

            if (userHealth < 1 || botHealth < 1) content = "Game ended";

            msg.edit({ embeds: [{ title: title, description: content }] });
        }
    }

    /**
     * An duo mode for fighting game, User1 VS User2.
     * @param {Discord.Message} message The message in which command was used.
     * @param {Discord.User} player2 The player 2
     */
    async duo(message, player2) {
        let userHealth = 100, user2Health = 100, userTiemout = [], user2Tiemout = [];
        let msg = await message.channel.send({ embeds: [{ color: "DARK_NAVY", title: "The Game has started" }] });

        while (userHealth > 0 && user2Health > 0) {
            const userChoice = await getMove.bind(this)(message.author, message, userTiemout);
            const player2Choice = await getMove.bind(this)(player2, message, user2Tiemout);

            if (userChoice === "end" || player2Choice === "end" || (userChoice !== 1 && userChoice !== 2 && userChoice !== 3) || (player2Choice !== 1 && player2Choice !== 2 && player2Choice !== 3)) break;

            const result = getResult.bind(this)(userChoice, userHealth, userTiemout, player2Choice, user2Health, user2Tiemout);

            userHealth = result.P1health;
            user2Health = result.P2health;
            userTiemout = result.P1timeout;
            user2Tiemout = result.P2timeout;

            const userMove = userChoice === 1 ? this.options.oneName : userChoice === 2 ? this.options.twoName : this.options.threeName;
            const user2Move = player2Choice === 1 ? this.options.oneName : player2Choice === 2 ? this.options.twoName : this.options.threeName;

            let content = getContent(result, message.author, player2, userMove, user2Move);
            let title = "Everyone chose their moves, Current Condtions :";

            if (userHealth < 1) title = `Game Ended, ${player2.username} Won 👑`;
            else if (user2Health < 1) title = `Game Ended, ${message.author.username} Won 👑`;

            if (userHealth < 1 || user2Health < 1) content = "Game ended";

            msg.edit({ embeds: [{ title: title, description: content }] });
        }
    }
}

module.exports = fight;