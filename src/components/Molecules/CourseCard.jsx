import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//const mayorDeEdad = (edad) => edad > 18;
/* const curso = {
	title: 'React desde cero',
	image:
		'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/figma-desde-cero-poster.png',
	tutor: 'jayro alhuay galindo',
	price: '50 usd'
}; */

const Curso = ({ id, title, image, tutor, price }) => (
	<article className="card" id={title}>
		<div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
			<Link to={`/cursos/${id}`}>
				<img src={image} alt={title} />
			</Link>
		</div>
		<div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
			<h3 className="center">{title}</h3>
			<div className="s-mb-2 s-main-center">
				<div className="card__teacher s-cross-center">
					<div className="card__avatar s-mr-1">
						<div className="circle img-container">
							<img
								src="https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
								alt="imagen 2"
							/>
						</div>
					</div>
					<span className="small">{`${tutor}`}</span>
				</div>
			</div>
			<div className="s-main-center">
				<a className="button--ghost-alert button--tiny" href="http://localhost:3000/ ">
					{`$ ${price} `}
				</a>
			</div>
		</div>
	</article>
);

//libreria propType para validar valores aca y no en el prop.
//Curso.propTypes = tipo de valores que se le asignara
Curso.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	tutor: PropTypes.string,
	price: PropTypes.string
};

//Curso.defaultProps = los valores que se le asignara
Curso.defaultProps = {
	title: 'No se encontro titulo',
	image: 'https://gerens.pe/blog/wp-content/uploads/2018/06/mantenimiento-02-I.jpg',
	tutor: '',
	price: '--'
};

export default Curso;
