import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
 

export const Update = () => {

	const {actions} = useContext(Context)
	const navigate = useNavigate()
  
    const [contact, setContact] = useState({
          full_name: '',
          address: '',
          phone: '',
          email: ''
        });

    
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`)
            .then((response) => response.json())
            .then((data) => {
            setContact(data);
            })
            .catch((error) => console.error('Error:', error));
        }, []);



	const handleChange = (event) => {
		setContact({...contact, [event.target.id]: event.target.value, agenda_slug: 'The_Agenda'})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
        
        const config = {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {
              'Content-Type': 'application/json'
            }
          };
		
        fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, config)

		.then((response) => {
			  if (response.ok) {
				console.log(`Contacto con ID ${id} actualizado`);
				actions.loadContacts();
			  } else {
				console.error(`Error al actualizar el contacto con ID ${id}`);
			  }
			})
			.catch((error) => console.error('Error:', error));

		navigate ('/');		
        
    };

    

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="col-8 m-auto">
				<h3 className="display-6 text-primary"> Datos del contacto </h3>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Nombre</label>
						<input type="text" className="form-control" id="full_name" placeholder="Name" value={contact.full_name} onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">Email</label>
						<input type="text" className="form-control" id="email" placeholder="Email" value={contact.email} onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="Address" className="Dirección">Dirección</label>
						<input type="text" className="form-control" id="address" placeholder="Dirección" value={contact.address} onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">Teléfono</label>
						<input type="phone" className="form-control" id="phone" placeholder="Teléfono" value={contact.phone} onChange={handleChange}/>
					</div>
				
					<button type="submit" className="btn btn-primary mt-3" role="button" onClick={handleSubmit}>
						Actualizar contacto
					</button>
				</div>
			</form>
			
			<div className="col-8 m-auto mt-2">
			    <Link to="/"><button type="button" className="btn btn-light">
					Volver a contactos
				</button></Link>
			</div>
		</>
	);
};
