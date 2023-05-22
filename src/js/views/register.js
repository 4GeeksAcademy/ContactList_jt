import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {

	const  [data, setData] = useState({})

	const handleChange = (event) => {
		setData({...data, [event.target.id]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(data)

		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 
				'Content-Type': 'application/json'
			}
		
		}

		fetch("https://assets.breatheco.de/apis/fake/contact/", config)
		.then(res => res.json())
		.catch(error => console.error('Eror:', error))
		.then(response => console.log('Success:', response));		
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="col-8 m-auto">
				<h2 className="display-6 text-primary"> Registro de Empresas </h2>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Nombre</label>
						<input type="text" className="form-control" id="full_name" placeholder="Name" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">Email</label>
						<input type="text" className="form-control" id="email" placeholder="Email" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="agenda_slug" className="form-label">Agenda Slug</label>
						<input type="text" className="form-control" id="agenda_slug" placeholder="Agenda Slug" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label htmlFor="Address" className="Dirección">Dirección</label>
						<input type="text" className="form-control" id="address" placeholder="Dirección" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">Teléfono</label>
						<input type="phone" className="form-control" id="phone" placeholder="Teléfono" onChange={handleChange}/>
					</div>
				
					<button type="submit" className="btn btn-primary btn-lg" role="button">
						Registrar Empresa
					</button>
				</div>
			</form>
		</>
	);
};
