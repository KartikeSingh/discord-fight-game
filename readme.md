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

## Custom Messages And Buttons
```js
const game = require('discord-fight-game');

const fight = new game(client, {
    // Custom Buttons
    oneName: "Sword",
    oneEmoji: "🤺",
    twoName: "Bow",
    twoEmoji: "🏹",
    threeName: "Shield",
    threeEmoji: "🛡",
    endName: "End Game",
    endEmoji: "🛑",

    // Custom Messages
    startMessage: "The war has begun, get ready warriors",
    midMessage: "The fighters chose their move, Current battle condition :",
    endMessage: "{winner} gloriously defeated {looser}",
    forceEndMessage: "{user} was scared so they ended the war",
    timeEndMessage: "{user} ran away from the war",
})
```

## Custom Game logic
```js
const game = require('discord-fight-game');

const fight = new game(client,{
    //  Starting health of players
    startHealth: 69,

    // Melee move's settings ( First / One Move )
    maxMelee: 18, // Maximum Melee damage possible
    minMelee: 5, // Minimum Melee damage possible
    meleeSuccessRate: 50, // Chance of successful attack
    meleeTimeoutRate: 30, // Chances of getting timedout from using Melee attack again

    // Ranged move's settings ( Second / Two Move )
    maxRanged: 12, // Maximum Ranged damage possible
    minRanged: 6, // Minimum Ranged damage possible
    rangedSuccessRate: 70, // Chance of successful attack
    rangedTimeoutRate: 20, // Chances of getting timedout from using Ranged attack again

    // Defense move's settings ( Third / Three Move )
    maxDefense: 10, // Maximum defense damage possible
    minDefense: 2, // Minimum defense damage possible
    defenseSuccessRateAgainstDefense: 50, // Chance of successful defense against defense
    defenseSuccessRateAgainstMelee: 60, // Chance of successful defense against Melee
    defenseSuccessRateAgainstRanged: 35, // Chance of successful defense against Ranged
    defenseTimeoutRate: 55,// Chances of getting timedout from using defense again  
});

```

# All Available Options
```js
/**
  * @typedef {Object} Options The options of fighting module
  * @property {String} startMessage The message title during game's starting
  * @property {String} midMessage The message title when both user chose their move
  * @property {String} endMessage The message title at the end of the game
  * @property {String} forceEndMessage The message title when game is ended forcefully
  * @property {String} timeEndMessage The message title when user didn't responded to bot's DM
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