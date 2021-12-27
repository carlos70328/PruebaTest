import Swal from 'sweetalert2';
import { createUser, login } from './login';

let obj = [];

let visibility = {
	user: true,
	home: false,
	idUser: 0,
};

export const loginSucces = (user, password, e) => {
	const validator = login(user, password);

	visibility.idUser = validator.idUser;

	if (validator.state === false) {
		Swal.fire({
			icon: 'success',
			title: 'Bienvenido',
		});
		visibility.user = true;
		visibility.home = false;
	} else {
		Swal.fire('Datos incorrectos', 'intente nuevamente', 'question');
		visibility.user = false;
		visibility.home = true;
	}

	e.target.reset();

	return visibility;
};

export const newSignUp = (name, password, e) => {
	let validator = createUser(name);

	let newUsuario = {
		id: Date.now(),
		name: name,
		password: password,
	};

	if (validator.state === true) {
		if (localStorage.getItem('usuarios') === null) {
			localStorage.setItem('usuarios', JSON.stringify(obj));
		}

		const newStorage = JSON.parse(localStorage.getItem('usuarios'));
		newStorage.push(newUsuario);
		localStorage.setItem('usuarios', JSON.stringify(newStorage));

		Swal.fire({
			icon: 'success',
			title: 'Te has registrado',
		});
	} else {
		Swal.fire('Ya se encuentra registrado');
	}

	e.target.reset();
};
