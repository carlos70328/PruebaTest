import React from 'react';
import imagen from '../inicio.jpg';

export default function Imagen() {
	return (
		<div className='no-scroll'>
			<img src={imagen} alt='programa' className='img-2' />
		</div>
	);
}
