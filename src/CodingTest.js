import React, { useEffect, useState } from 'react';
import { loginSucces, newSignUp } from './helpers/loginSucces';
import { getRepos } from './helpers/getRepos';
import { useForm } from './hooks/useForm';
import Imagen from './components/carga';
import ListarRepo from './components/listarRepos';
import './login.css';

let idUser = 0;

function CodingTest() {
	const [homeSection, setHomeSection] = useState(true);
	const [userSection, setUserSection] = useState(false);
	const [formValues, setFormValues] = useForm({
		name: '',
		password: '',
	});
	const [repositories, setRepositories] = useState({});

	const { name, password } = formValues;

	useEffect(() => {
		getRepos(name)
			.then((repos) => {
				setRepositories(repos);
			})
			.catch(console.log);
	}, [userSection]);

	const login = (e) => {
		e.preventDefault();

		const visibility = loginSucces(name, password, e);

		if (visibility.user === false) {
			return;
		}

		setHomeSection(visibility.home);
		setUserSection(visibility.user);

		idUser = visibility.idUser;
	};

	const signUp = (e) => {
		e.preventDefault();
		newSignUp(name, password, e);
	};

	const logOut = (e) => {
		e.preventDefault();

		setHomeSection(true);
		setUserSection(false);
	};

	return (
		<div className='App'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a href='./' className='navbar-brand'>
					Test<b>Coding</b>
				</a>
				<div className='navbar-nav ml-auto action-buttons'>
					{homeSection && (
						<div className='nav-item dropdown'>
							<a
								href='./'
								data-toggle='dropdown'
								className='nav-link dropdown-toggle mr-4'
							>
								Login
							</a>
							<div className='dropdown-menu action-form'>
								<form id='usuario' onSubmit={login}>
									<div className='form-group'>
										<input
											type='text'
											name='name'
											className='form-control'
											placeholder='Username'
											required='required'
											onChange={setFormValues}
										/>
									</div>
									<div className='form-group'>
										<input
											type='password'
											name='password'
											className='form-control'
											placeholder='Password'
											required='required'
											onChange={setFormValues}
										/>
									</div>
									<input
										type='submit'
										className='btn btn-primary btn-block'
										value='Login'
									/>
								</form>
							</div>
						</div>
					)}
					{homeSection && (
						<div className='nav-item dropdown'>
							<a
								href='./'
								data-toggle='dropdown'
								className='btn btn-primary dropdown-toggle sign-up-btn'
							>
								Sign up
							</a>
							<div className='dropdown-menu action-form'>
								<form id='fnewUsuario' onSubmit={signUp}>
									<p className='hint-text'>
										Crea una cuenta usanto tu usuario de GitHub
									</p>
									<div className='form-group'>
										<input
											type='text'
											name='name'
											className='form-control'
											placeholder='Username'
											required='required'
											onChange={setFormValues}
										/>
									</div>
									<div className='form-group'>
										<input
											type='password'
											name='password'
											className='form-control'
											placeholder='Password'
											required='required'
											onChange={setFormValues}
										/>
									</div>
									<input
										type='submit'
										className='btn btn-primary btn-block'
										value='Sign up'
									/>
								</form>
							</div>
						</div>
					)}
					{userSection && (
						<div className='nav-item dropdown'>
							<div className='dropdown-menu1'>
								<form id='fnewUsuari' type='submit' onSubmit={logOut}>
									<input
										type='submit'
										className='btn btn-primary btn-block'
										value='Log out'
									/>
								</form>
							</div>
						</div>
					)}
				</div>
			</nav>
			{homeSection && <Imagen />}
			{userSection && <ListarRepo repos={repositories} idUser={idUser} />}
		</div>
	);
}

export default CodingTest;
