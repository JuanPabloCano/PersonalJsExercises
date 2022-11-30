const rules = {
	scissors: ['paper', 'alligator'],
	paper: ['stone', 'spock'],
	stone: ['paper', 'spock'],
	alligator: ['paper', 'spock'],
	spock: ['scissors', 'stone'],
};

const player1 = 'paper';
const player2 = 'scissors';

if (!rules[player1] || !rules[player2]) console.log('Not found');
if (rules[player1] === rules[player2]) console.log('Tied');
if (rules[player2].includes(player1)) console.log('Player 2 wins');
else console.log('Player 1 wins');
