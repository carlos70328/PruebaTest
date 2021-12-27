export const login = (user, password) => {
	const validator = {
		state: true,
		idUser: 0,
	};

	const arreglo = JSON.parse(localStorage.getItem('usuarios'));

	if (arreglo === null) {
		validator.state = true;
	} else {
		arreglo.map((users) => {
			if (users.name === user && users.password === password) {
				validator.state = false;
				validator.idUser = arreglo.indexOf(users);
			}
			return true;
		});
	}
	return validator;
};

export const createUser = (name) => {
	const validator = {
		state: true,
		idUser: 0,
	};

	const arreglo = JSON.parse(localStorage.getItem('usuarios'));

	if (arreglo === null) {
		validator.state = true;
	} else {
		arreglo.map((users) => {
			if (users.name === name) {
				validator.state = false;
			}
			return true;
		});
	}

	return validator;
};
