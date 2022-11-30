const users = [
	{
		nit: 1000000000,
		program: 'Orgánicos',
		fullname: 'cata documento',
		documentType: 'C',
		document: '100542345',
		email: 'catadocumento@prueba.com',
		city: 'MEDELLIN',
		phone: null,
		profileType: 'Administrativos',
		remission: null,
		deviceAccess: null,
		conversation: null,
		dateconversation: null,
	},
	{
		nit: 1000000000,
		program: 'Orgánicos',
		fullname: 'cata documento',
		documentType: 'C',
		document: '123',
		email: 'catadocumento@prueba.com',
		city: 'MEDELLIN',
		phone: null,
		profileType: 'Administrativos',
		remission: null,
		deviceAccess: null,
		conversation: null,
		dateconversation: null,
	},
	{
		nit: 1000000000,
		program: 'Orgánicos',
		fullname: 'cata documento',
		documentType: 'C',
		document: '100542345',
		email: 'catadocumento@prueba.com',
		city: 'MEDELLIN',
		phone: null,
		profileType: 'Administrativos',
		remission: null,
		deviceAccess: null,
		conversation: null,
		dateconversation: null,
	},
	{
		nit: 1000000000,
		program: 'Orgánicos',
		fullname: 'cata documento',
		documentType: 'C',
		document: '100542345',
		email: 'catadocumento@prueba.com',
		city: 'MEDELLIN',
		phone: null,
		profileType: 'Administrativos',
		remission: null,
		deviceAccess: null,
		conversation: null,
		dateconversation: null,
	},
	{
		nit: 1000000000,
		program: 'Orgánicos',
		fullname: 'cata documento',
		documentType: 'C',
		document: '100542345',
		email: 'catadocumento@prueba.com',
		city: 'MEDELLIN',
		phone: null,
		profileType: 'Administrativos',
		remission: null,
		deviceAccess: null,
		conversation: null,
		dateconversation: null,
	},
	{
		nit: 1000000000,
		program: 'Orgánicos',
		fullname: 'cata documento',
		documentType: 'C',
		document: '123',
		email: 'catadocumento@prueba.com',
		city: 'MEDELLIN',
		phone: null,
		profileType: 'Administrativos',
		remission: null,
		deviceAccess: null,
		conversation: null,
		dateconversation: null,
	},
];

const filteredUsers = Object.values(
	users.reduce((acc, current) => {
		if (!acc[current.document]) {
			acc[current.document] = current;
		}
		return acc;
	}, {})
);

console.log(filteredUsers);
