import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

	 
	 
	export const Home = () => {

	const {store, actions} = useContext(Context)


	const deleteContact = (id) => {
		fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
			method: 'DELETE',
			headers: {
			  'Content-Type': 'application/json'
			}
		  })
			.then((response) => {
			  if (response.ok) {
				console.log(`Contacto con ID ${id} eliminado correctamente`);
				actions.loadContacts();
			  } else {
				console.error(`Error al eliminar el contacto con ID ${id}`);
			  }
			})
			.catch((error) => console.error('Error:', error));
		};




	return (
	<>
	<div className="mt-4">
		<h1 className="text-center display-6 text-primary">Lista de Contactos</h1>
		
		{store.contacts.map((contacts)=> {
			return (
		<div className="col-12" key={contacts.id}>
			<div className="card m-auto w-75 my-3 shadow">
				<div className="row">
					<div className="col-2">
						<img src="https://i.seadn.io/gae/fk0J30zdCm-QszMExaws1o5nftXA0iklsk1x8PFMI1eIMH97s9JGTqpu_tJQoX3D5VRGrL0DNGh27UKs6lmqaK96ydHtk2eSOp3H0Oo?auto=format&dpr=1&w=1000" className="w-75 m-3 rounded-circle mx-auto d-block" alt="profile picture"/>
					</div>

					<div className="col-7 ">
						<h4 className="mt-3">{contacts.full_name}</h4>
						<ul className="list-group list-group-flush">
							<li className="list-group-item"><i className="mx-3 fas fa-map-marker-alt"></i>{contacts.address}</li>
							<li className="list-group-item"><i className="mx-3 fas fa-phone"></i>{contacts.phone}</li>
							<li className="list-group-item"><i className="mx-3 fas fa-envelope"></i>{contacts.email}</li>
						</ul>
					</div>
					<div className="col-3 d-flex justify-content-center">
						<button type="button" className="my-auto m-2 btn btn-outline-success "><Link to={`/update/${contacts.id}`}><i className="fas fa-user-edit"></i></Link></button>
						<button type="button" className="my-auto m-2 btn btn-outline-danger" onClick={() => deleteContact(contacts.id)}><i className="fas fa-user-times"></i></button>
					</div>
				</div>
			</div>
		</div>
		)})}

		<div className="text-center my-3">
		<Link to="/register">
		<button className="btn btn-primary">
			Nuevo contacto
		</button>
		</Link>
		</div>
	</div>
	</>
)
};
