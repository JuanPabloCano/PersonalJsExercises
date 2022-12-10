/* Considera una lista/array de ovejas. 
Cada oveja tiene un nombre y un color. 
Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
y que además su nombre contenga tanto las letras n Y a, sin importar el orden, 
las mayúsculas o espacios.*/

const sheeps = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' },
	{ name: 'AAAAAaaaaa', color: 'rojo' },
	{ name: 'Nnnnnnnn', color: 'rojo' },
];

const regex = /[n][a]+/gi;

const sheepFilter = (sheeps) => {
	return sheeps.filter(
		(sheep) => sheep.color === 'rojo' && regex.test(sheep.name)
	);
};
console.log('Sheeps:', sheepFilter(sheeps));

/** Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

const carta = 'bici coche balón _playstation bici coche peluche'.
Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!   */

const carta = 'bici coche balón _playstation bici coche peluche';

const arrayCarta = carta.trim().split(' ');
const cartaObject = {};

arrayCarta.forEach((item) => {
	if (!item.includes('_')) {
		cartaObject[item] = ++cartaObject[item] || 1;
	}
});

console.log(cartaObject);

/** El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...*/

function isValid(letter) {
	const regex = /[A-Za-z-ñÑ]+$/;
	const letters = letter.split('');
	let exit = false;
	const index = letters.findIndex((item) => item === '(');
	const closedIndex = letters.lastIndexOf(')');
	const subArray = letters.slice(index + 1, closedIndex);
	if (closedIndex - index >= 2) {
		exit = true;
	}
	for (let i in subArray) {
		if (!regex.test(subArray[i])) {
			exit = false;
		}
	}
	return exit;
}

const words = '(muñeca) consola bici';

console.log(isValid(words));

/**Este año los elfos han comprado una máquina que envuelve regalos. Pero... ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */
/**Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

Nota:El carácter \n representa un salto de línea.

¡Ojo!Asegúrate que pones el número correcto de * para envolver completamente el string. */

function wrapping(gifts) {
	return gifts.map((gift) => {
		const ast = '*'.repeat(gift.length + 2);
		return [ast, `*${gift}*`, ast].join('\n');
	});
}

function wrappingMidu(gifts) {
	const wrap = (gift) => {
		const a = '*'.repeat(gift.length + 2);
		return [a, `*${gift}*`, a].join('\n');
	};
	return gifts.map(wrap);
}

const gifts = ['book', 'game', 'socks'];
const wrapped = wrapping(gifts);
const wrappedMidu = wrappingMidu(gifts);
console.log(wrapped);
console.log(wrappedMidu);

/**Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.
 */

function countHours(year, holidays) {
	let hourCounter = 0;
	holidays.forEach((holiday) => {
		const day = new Date(`${holiday}/${year}`).getDay();
		if (day >= 1 && day < 6) {
			hourCounter += 2;
		}
	});
	return hourCounter;
}

const year = 2022;
const holidays = ['01/06', '04/01', '12/25'];
countHours(year, holidays);

// Demo
const countries = ['USA', 'Australia', 'Australia', 'France', 'India', 'USA'];

countries.forEach((value, index, arr) => {
	arr.forEach((val, idx) => {
		if (val === value && index < idx) {
			if (idx === index + 1) console.log(`Bingo ${value}`);
			else console.log(`Hooray ${value}`);
		}
	});
});

/**
 * Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.
 */

function distributeGifts(packOfGifts, reindeers) {
	const giftPackSize = packOfGifts.reduce((acc, curr) => acc + curr.length, 0);
	const reindeersVolumetoCarry = reindeers.reduce(
		(acc, curr) => acc + curr.length * 2,
		0
	);
	return Math.floor(reindeersVolumetoCarry / giftPackSize);
}

const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];

distributeGifts(packOfGifts, reindeers);
