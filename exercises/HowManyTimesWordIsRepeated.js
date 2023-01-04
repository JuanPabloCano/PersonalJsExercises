function countRepeatedWords(words) {
	const wordsObj = {};
	const formattedWords = replaceSpecialCharactersInWords(words);
	formattedWords.forEach((word) => (wordsObj[word] = ++wordsObj[word] || 1));
	return wordsObj;
}

function replaceSpecialCharactersInWords(word) {
	return word.replace(/[?,]/g, '').toLocaleLowerCase().split(' ');
}

const word =
	'Hola, hoy es un dia especial, hola amigo, que dia es hoy entonces? Hoy es especial amigo mio';
console.log(countRepeatedWords(word));
