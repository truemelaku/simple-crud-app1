import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Createusers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault(); // Corrected method name
    console.log('Submitting form with:', { name, email, age }); // Log form data

    axios.post('http://localhost:4000/createUser', { name, email, age })
      .then((result) => {
        console.log('Response received:', result); // Log the result
            navigate('/')
      })
      .catch((err) => {
        console.error('Error occurred:', err); // Log the error
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name} // Set the value to the state
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email} // Set the value to the state
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={age} // Set the value to the state
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Createusers;
