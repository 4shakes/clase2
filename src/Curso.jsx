import React from 'react';

//const mayorDeEdad = (edad) => edad > 18;

const Curso = () => (
	<article className="card">
		<div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
			<img
				src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-09/adobe-xd.png"
				alt="imagen"
			/>
		</div>
		<div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
			<h3 className="t5 s-mb-2 s-center">Programación orientada a objetos con Go</h3>
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
					<span className="small" />
				</div>
			</div>
			<div className="s-main-center">
				<a className="button--ghost-alert button--tiny" href="http://localhost:3000/ ">
					$ 20USD
				</a>
			</div>
		</div>
	</article>
);
export default Curso;
