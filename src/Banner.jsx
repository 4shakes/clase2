import React from 'react';

const Banner = () => (
	<div className="main-banner img-container l-section" id="main-banner">
		<div className="ed-grid lg-grid-6">
			<div className="lg-cols-4 lg-x-2">
				<img
					className="main-banner__img"
					alt="banner"
					src="https://ep01.epimg.net/elpais/imagenes/2017/07/24/paco_nadal/1500918498_125283_1500930190_noticia_normal_recorte1.jpg"
				/>
				<div className="main-banner__data s-center">
					<p className="t2 s-mb-0">Cursos de edteam</p>
					<p>Tu futuro te esta esperando</p>
					<a href="http://localhost:3000/" className="button">
						Suscribete
					</a>
				</div>
			</div>
		</div>
	</div>
);
export default Banner;
