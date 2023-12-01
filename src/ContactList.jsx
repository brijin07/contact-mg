import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';



function ContactList() {
    const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios.get('https://video-backend-e5tx.onrender.com/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts', error));
  };

  const handleAddContact = () => {
    axios.post('https://video-backend-e5tx.onrender.com/contacts', newContact)
      .then(() => {
        setNewContact({ name: '', email: '' });
        fetchContacts(); // Refresh the contact list
      })
      .catch(error => console.error('Error adding contact', error));
  };

  const handleDeleteContact = (id) => {
    axios.delete(`https://video-backend-e5tx.onrender.com/contacts/${id}`)
      .then(() => fetchContacts()) // Refresh the contact list
      .catch(error => console.error('Error deleting contact', error));
  };
  return (
    
    <div>
    <div className='fo w-100 '>
          <div className=' for  '>
               
              <div className='mt-3'>
              <h2 className='text-light'>Add New Contact</h2>
                <input
                className='form-control mt-3'
                  type="text"
                  placeholder="Name"
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                /><br/>
                <input
                  className='form-control'
                  type="text"
                  placeholder="Email/phone"
                  value={newContact.email}
                  onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                /><br/>
                <button className='btn btn-danger' onClick={handleAddContact}>Add Contact</button>
              </div>
          </div>
    </div>
<div  className='foo'>
    
          <h2 className='foo mt-4 text-light'>Contact List</h2>
       

          <Table striped bordered hover className='container'>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Email/phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {contacts.map(contact => (
        <tr  key={contact.id}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td> <button className='border-0' onClick={() => handleDeleteContact(contact.id)}><Trash2 color="red"/></button></td>
         
      
        </tr>
      ))}
      </tbody>
      
    </Table>
    
</div>


     
    </div>
  )
}

export default ContactList