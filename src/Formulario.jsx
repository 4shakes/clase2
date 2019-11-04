//destructuracion
import React, { Component } from 'react';

class Formulario extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nombre: '',
			email: ''
		};

		this.cambiarNombre = this.cambiarNombre.bind(this);
		this.cambiarCorreo = this.cambiarCorreo.bind(this);
	}
	//this.setState
	//forma correcta
	cambiarNombre(e) {
		this.setState({
			nombre: e.target.value
		});
	}

	//creo que tambien se puede asi
	cambiarCorreo = (e) =>
		this.setState({
			email: e.target.value
		});

	render() {
		return (
			<div className="ed-grid">
				<h1>Formulario</h1>
				<form id="elemento">
					<div className="ed-grid m-grid-2">
						<div className="form__item">
							<label htmlFor="nombre">Nombre Completo </label>
							<input type="text" name="nombre" id="" onChange={this.cambiarNombre} />
						</div>
						<div className="form__item">
							<label htmlFor="email">Email </label>
							<input type="email" name="email" onChange={this.cambiarCorreo} />
						</div>
						{/* <div className="form__item">
							<button className="button full" type="submit" id="">
								Enviar
							</button>
						</div> */}
					</div>
				</form>
				<div className="hola">
					<h2>{`Hola ${this.state.nombre}`}</h2>
					<span>{`Tu correo es: ${this.state.email}`}</span>
				</div>
			</div>
		);
	}

	//manupular los elementos del dom en este metodo porque ya esta renderisado
	componentDidMount() {
		let elemento = document.getElementById('elemento');
		console.log(elemento);
	}
}

export default Formulario;
