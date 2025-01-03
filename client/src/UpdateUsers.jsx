import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUsers() {
    const { id } = useParams(); // This gets the dynamic ID from the URL
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', age: '' });

    useEffect(() => {
        // Fetch user data by ID (GET request)
        axios.get(`http://localhost:4000/getUser/${id}`)
            .then(res => setUser(res.data)) // Sets fetched user data
            .catch(err => console.log(err)); // Logs errors if they occur
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value }); // Updates the state with new values
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // PUT request to update the user with new data
        axios.put(`http://localhost:4000/updateUser/${id}`, user)
            .then(res => {
                alert('User updated successfully!');
                navigate('/'); // Redirects to the home page after the update
            })
            .catch(err => console.log(err)); // Logs errors if they occur
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <h2>Update User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Age</label>
                        <input
                            type="number"
                            className="form-control"
                            name="age"
                            value={user.age}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUsers;
