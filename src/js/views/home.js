import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Lista de Contactos</h1>
		
		<Link to="/register">
		<button className="btn btn-success">
			Nuevo contacto
		</button>
		</Link>
	</div>
);
