import React from 'react';

const curso = [
	{
		id: 1,
		title: 'React desde cero',
		image:
			'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/figma-desde-cero-poster.png',
		tutor: 'jayro alhuay galindo',
		price: '50 usd'
	},

	{
		id: 2,
		title: 'Html desde cero',
		image:
			'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t',
		tutor: 'jayro alhuay galindo',
		price: '40 usd'
	},

	{
		id: 3,
		title: 'Css desde cero',
		image:
			'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/css-poster_1.jpg?itok=VUK9BKuY',
		tutor: 'jayro alhuay galindo',
		price: '30 usd'
	},

	{
		id: 4,
		title: 'pug desde cero',
		image: 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-09/cursos-pug.jpg',
		tutor: 'jayro alhuay galindo',
		price: '20 usd'
	}
];

const Course = ({ match }) => {
	const CursoActual = curso.filter((c) => c.id === parseInt(match.params.id))[0];

	return (
		<div className="ed-grid m-grid-3">
		{
                CursoActual ? (
                    <>
                        <h1 className="m-cols-3">{CursoActual.title}</h1>
                        <img className="m-cols-1" src={CursoActual.image} alt={CursoActual.title} />
                        <p className="m-cols-2">Profesor: {CursoActual.tutor}</p>
                    </>
                    ) : 
                        <h1>El curso no existe</h1> 
                        
        }
		</div>
	);
};

export default Course;
