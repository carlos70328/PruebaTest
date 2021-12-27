import { useState } from 'react';
import Swal from 'sweetalert2';

let reposFavo = [];

export const useFav = () => {
	const [reposFav, setReposFav] = useState(0);

	const AddFavorites = (index, repos) => {
		const id = repos[index].id;

		if (reposFavo.find((user) => user.id === id)) {
			Swal.fire('El repositorio ya se encuentra en sus Favoritos');
		} else {
			if (reposFavo !== undefined) {
				reposFavo.push(repos[index]);

				setReposFav(reposFav + 1);
			}
		}

		return reposFavo;
	};

	const RemoveFavorites = (index) => {
		reposFavo.splice(index, 1);

		setReposFav(reposFav - 1);

		return reposFavo;
	};

	return {
		RemoveFavorites,
		AddFavorites,
		reposFav,
	};
};
