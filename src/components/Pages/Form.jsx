//destructuracion
import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			date: new Date()
		};

		this.changeName = this.changeName.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changeDate = this.changeDate.bind(this);
	}
	//this.setState
	//forma correcta
	changeName(e) {
		this.setState({
			name: e.target.value
		});
	}

	//creo que tambien se puede asi
	changeEmail = (e) =>
		this.setState({
			email: e.target.value
		});

	changeDate() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div className="ed-grid">
				<h1>Formulario</h1>
				<h3>la date de hoy es: {Math.ceil(this.state.date / 1000)}</h3>
				<form id="elemento">
					<div className="ed-grid m-grid-2">
						<div className="form__item">
							<label htmlFor="name">name Completo </label>
							<input type="text" name="name" id="" onChange={this.changeName} />
						</div>
						<div className="form__item">
							<label htmlFor="email">Email </label>
							<input type="email" name="email" onChange={this.changeEmail} />
						</div>
						{/* <div className="form__item">
							<button className="button full" type="submit" id="">
								Enviar
							</button>
						</div> */}
					</div>
				</form>
				<div className="hola">
					<h2>{`Hola ${this.state.name}`}</h2>
					<span>{`Tu correo es: ${this.state.email}`}</span>
				</div>
			</div>
		);
	}

	//manupular los elementos del dom en este metodo porque ya esta renderisado
	componentDidMount() {
		//let elemento = document.getElementById('elemento');
		this.intervaloDate = setInterval(() => {
			this.changeDate();
			//console.log(new Date());
		}, 1000);
	}

	//ve el antepenultimo estado
	componentDidUpdate(prevProps, prevState) {
		//console.log(prevState);
	}

	//desmontar los contadores porque sino se hacen infinitos
	// y comen recursos
	componentWillUnmount() {
		clearInterval(this.intervaloDate);
	}
}

export default Form;
