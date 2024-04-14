import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        if (!email || !password) {
            alert("Please enter both email and password");
            return;
        }

        try {
            const res = await axios.post("http://localhost:8081/auth/login", {
                email: email,
                password: password,
            });

            console.log(res.data);

            if (res.data.message === "Email not exists") {
                alert("Email does not exist");
            } else if (res.data.message === "Login Success") {
                const token = res.data.token; // Get the token from response
                localStorage.setItem("token", token); // Store the token in local storage

                const role = res.data.role;
                console.log("Role:", role); // Log the role to ensure it's correct

                // Redirect to the appropriate home page based on the role
                if (role === "USER") {
                    console.log("Navigating to /home"); // Log navigation intention
                    navigate('/userhome');
                } else if (role === "ADMIN") {
                    console.log("Navigating to /admin"); // Log navigation intention
                    navigate('/');
                }
            } else {
                alert("Incorrect Email and Password combination");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred while logging in");
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-6 custom-container border p-4 rounded shadow">
                    <h2 className="text-center mb-4">Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
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
                                className="form-control"
                                id="password"
                                placeholder="Enter Password"
                                required
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>

                        <button type="submit" className="btn btn-success btn-block mt-4" onClick={login}>Login</button>
                    </form>
                   
                    <p className="text-center mt-3">Not a member? <a href="/register">Sign up now</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
