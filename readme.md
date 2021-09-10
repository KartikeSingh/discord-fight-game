# Installations
```
npm i discord-fight-game
```

# What ?
This package is to make a PVP game for discord bots, Both Solo and Duo mode available.

# Why ?
- Easy to use.
- Highly Customizable. ( works with 0 configuration too )
- Fast and advanced.

# Note
- Supports Discord.js V-13 and above.

# How ?
```js
const game = require('discord-fight-game');
const fight = new game(client); // Your discord Client

/**
  * An solo mode for fighting game, User VS Bot.
  * @param {Discord.Message} message The message in which command was used
  */
fight.solo(mesage);

/**
 * An duo mode for fighting game, User1 VS User2.
 * @param {Discord.Message} message The message in which command was used
 * @param {Discord.User} player2 The player 2
 */
fight.duo(message,player2) 
```

# Advanced 
```js
const game = require('discord-fight-game');

const fight = new game(client,options);

// List of options : 
/**
  * @typedef {Object} Options The options of fighting module
  * @property {String} oneName First move's name
  * @property {String} oneEmoji First move's emoji
  * @property {String} twoName Second move's name
  * @property {String} twoEmoji Second move's emoji
  * @property {String} threeName Third move's name
  * @property {String} threeEmoji Third move's emoji
  * @property {String} endName Game end's name
  * @property {String} endEmoji Game end's emoji
  * @property {Number} startHealth The starting health of players
  * @property {Number} defenseSuccessRateAgainstDefense Success rate of defending against enemy defending
  * @property {Number} defenseSuccessRateAgainstMelee Success rate of defending against enemy using melee move
  * @property {Number} defenseSuccessRateAgainstRanged Success rate of defending against enemy using ranged move
  * @property {Number} maxDefense Maximum defense points
  * @property {Number} minDefense Minimum defense points
  * @property {Number} defenseTimeoutRate Chances to get timeout to use defense move
  * @property {Number} maxMelee Maximum Melee points
  * @property {Number} minMelee Minimum Melee points
  * @property {Number} meleeSuccessRate Chances of Melee move success
  * @property {Number} meleeTimeoutRate Chances to get timeout to use melee move
  * @property {Number} maxRanged Maximum Ranged points
  * @property {Number} minRanged Minimum Ranged points
  * @property {Number} rangedTimeoutRate Chances to get timeout to use ranged move
  * @property {Number} rangedSuccessRate Chances of Ranged move success
  */
```

# Supports
For support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh).