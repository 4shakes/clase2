import React from 'react';
import CourseCard from '../Molecules/CourseCard';

const courses = [
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

const CourseGrid = () => (
	<div className="ed-grid m-grid-4">
		{courses.map((c) => (
			<CourseCard key={c.id} id={c.id} title={c.title} image={c.image} price={c.price} tutor={c.tutor} />
		))}
	</div>
);
export default CourseGrid;
