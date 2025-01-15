
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: []
		},
		actions: {
			getContactInfo: () => {
				fetch('https://playground.4geeks.com/contact/agendas/franazuara/contacts')
  				.then(response => {
						if (!response.ok){
							getActions().createAgenda();
						}
						return response.json();})
  				.then(data => {setStore({contactList: data.contacts})})
 				.catch(err => console.error(err));
			},
			createAgenda: () => {
				const options = {method: 'POST'};

				fetch('https://playground.4geeks.com/contact/agendas/franazuara', options)
				.then(response => {response.json()})
				.then((data) => {getActions().getContactInfo()})
			},
			addContact: (contact, navigate) => {
				
				const options = {
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify(contact)
				  };
				  
				  fetch('https://playground.4geeks.com/contact/agendas/franazuara/contacts', options)
					.then(response => {
						if (!response.ok){
							throw new Error("No se pudo añadir el contacto");
						}
						return response.json();})
					.then((data) => {
						setStore({contactList: [...getStore().contactList, data] })
						navigate("/")
					})
					.catch(err => console.error(err));
			},
			editContact: (contact, id, navigate) => {
				const store = getStore();
				const options = {
					method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                }
                fetch(`https://playground.4geeks.com/contact/agendas/franazuara/contacts/${id}`, options)
                .then(response => response.json())
				.then((data) => {
					if (data) {
						const updatedList = store.contactList.map(contact => {
							if (contact.id == id) {
								contact = data
							}
							return contact
						})
						setStore({ contactList: updatedList })
						navigate("/")
					}
				})
  				.catch(err => console.error(err));
			},
			deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/franazuara/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        console.log(response)
                        if (response.ok) {
                            setStore({ contactList: getStore().contactList.filter(contact => contact.id !== id)  });
                            console.log(`Contact with ID ${id} deleted`);
                        } else {
                            console.log("Error al borrar el contacto");
                        }
                    })
                    .catch((error) => console.log(error));
            }
		}

	};
};

export default getState;
