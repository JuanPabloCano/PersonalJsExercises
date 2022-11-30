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
