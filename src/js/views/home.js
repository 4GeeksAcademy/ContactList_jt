import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	<div className="mt-4">
		<h1 className="text-center display-6 text-primary">Lista de Contactos</h1>
		
		<div className="col-12">
			<div className="card m-auto w-75">
				<div className="row">
					<div className="col-2">
						<img src="https://i.seadn.io/gae/fk0J30zdCm-QszMExaws1o5nftXA0iklsk1x8PFMI1eIMH97s9JGTqpu_tJQoX3D5VRGrL0DNGh27UKs6lmqaK96ydHtk2eSOp3H0Oo?auto=format&dpr=1&w=1000" className="w-75 m-3 rounded-circle mx-auto d-block" alt="profile picture"/>
					</div>
					<div className="col-7 ">
						<h4 className="mt-3">Nombre</h4>
						<ul className="list-group list-group-flush">
							<li className="list-group-item"><i className="mx-3 fas fa-map-marker-alt"></i>Dirección</li>
							<li className="list-group-item"><i className="mx-3 fas fa-phone"></i>Teléfono</li>
							<li className="list-group-item"><i className="mx-3 fas fa-envelope"></i>Email</li>
						</ul>
					</div>
					<div className="col-3 d-flex justify-content-center">
						<button type="button" className="my-auto m-2 btn btn-outline-success"><i className="fas fa-user-edit"></i></button>
						<button type="button" className="my-auto m-2 btn btn-outline-danger"><i className="fas fa-user-times"></i></button>
					</div>
				</div>
			</div>
		</div>

		<div className="text-center my-3">
		<Link to="/register">
		<button className="btn btn-primary">
			Nuevo contacto
		</button>
		</Link>
		</div>
	</div>
);
