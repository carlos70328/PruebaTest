import React, { useEffect } from 'react';
import { useFav } from '../hooks/useFav.js';
import './listarRepos.css';

let reposFavo = [];

const ListarRepo = ({ repos = [], idUser }) => {
	const { reposFav, AddFavorites, RemoveFavorites } = useFav();

	useEffect(() => {}, [reposFav]);

	const showFavorites = (e, index, repos) => {
		e.preventDefault();

		reposFavo = AddFavorites(index, repos);
	};
	const hideFavorites = (e, index) => {
		e.preventDefault();

		reposFavo = RemoveFavorites(index);
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6'>
					<h1 className='mis-repos estilo-x'>
						Mis repositorios {repos.length}
					</h1>
					{repos[idUser] && (
						<img
							className='img-fluid border'
							src={repos[idUser].img}
							alt='avatar'
						/>
					)}
					<ul className='list-group list-group-flush'>
						{repos.map((user, index) => (
							<li key={index} id={user.id} className='list-group-item'>
								<h6>
									<p
										id={index}
										type='submit'
										onClick={(e) => showFavorites(e, index, repos)}
									>
										{user.name}
									</p>

									<p> - {user.description}</p>
								</h6>
							</li>
						))}
					</ul>
				</div>
				<div className='col-md-6' id='lista-favoritos'>
					<h1 className='mis-repos estilo-x'>
						Mis Favoritos {reposFavo.length}
					</h1>
					<div>
						<ul>
							Mis Repositorios favoritos
							{reposFavo.length > 0 &&
								reposFavo.map((user, index) => (
									<li
										key={index}
										id={user.id}
										className='list-group-item border'
									>
										<h6>
											<p
												className='quitar-repo'
												type='submit'
												onClick={(e) => hideFavorites(e, index)}
											>
												X
											</p>
											<p id={index}>{user.name}</p>

											<p>{user.description}</p>
										</h6>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListarRepo;
