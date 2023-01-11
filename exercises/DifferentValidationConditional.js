const y = 3;

// This way can be upgraded
if (y === 3 || y === 4 || y === 5 || y === 6 || y === 7 || y === 8 || y === 9)
	console.log('Found');

// Cleaner way to do it
if ([3, 4, 5, 6, 7, 8, 9].includes(y)) console.log('Found');
