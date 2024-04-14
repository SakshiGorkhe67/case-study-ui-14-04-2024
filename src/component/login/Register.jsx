import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("USER"); // Default role is set to USER
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        if (!username || !email || !password || !role) { // Ensure role is not empty
            alert("Please fill in all fields");
            return;
        }
        
        try {
            await axios.post("http://localhost:8081/auth/save", {
                username: username,
                email: email,
                password: password,
                role: role // Include role in the request
            });
            alert("User Registration Successful");
            navigate('/login'); 
        }  catch (err) {
            console.error(err);
            if (err.response && err.response.data) {
                alert(err.response.data); // Display specific error message from backend
            } else {
                alert("An error occurred while registering");
            }
        }
    }
    
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6">
                    <div className="card p-4 shadow">
                        <h1 className="text-center">Registration</h1>

                        <form>
                            <div className="form-group">
                                <label htmlFor="username">User name</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    id="username"
                                    placeholder="Enter Name"
                                    required
                                    value={username}
                                    onChange={(event) => {
                                        setUsername(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control custom-input"
                                    id="email"
                                    placeholder="Enter Email"
                                    required
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control custom-input"
                                    id="password"
                                    placeholder="Enter password"
                                    required
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="role">Role</label>
                                <select
                                    className="form-control custom-input"
                                    id="role"
                                    value={role}
                                    onChange={(event) => setRole(event.target.value)}
                                >
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block  btn-success" onClick={save}>Register</button>
                        </form>

                       <p className="text-center mt-3">Already have an account? <a href="/">Login now</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
