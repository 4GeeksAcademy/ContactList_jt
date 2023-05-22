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

		fetch("https://retoolapi.dev/rAghoE/data", config)
		.then(res => res.json())
		.catch(error => console.error('Eror:', error))
		.then(response => console.log('Success:', response));		
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h2 className="display-4"> Registro de Empresas </h2>
					<div className="mb-3">
						<label htmlFor="name" className="nombre empresa">Nombre</label>
						<input type="text" className="form-control" id="Name" placeholder="Example input placeholder" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">Email</label>
						<input type="text" className="form-control" id="Email" placeholder="Another input placeholder" onChange={handleChange}/>
					</div>
				
					<button type="submit" className="btn btn-primary btn-lg" role="button">
						Registrar Empresa
					</button>
				
			</form>
		</>
	);
};
