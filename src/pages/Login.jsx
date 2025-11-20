import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Login() {

    useEffect(() => {
        document.title = 'OBTION | Login';
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        setUsernameError('');
        setPasswordError('');

        const enteredUsername = username.trim();
        const enteredPassword = password.trim();

        fetch("https://obtion-backend.onrender.com/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(users => {
                const user = users.find(u => u.email === enteredUsername);

                if (user) {
                    if (user.password === enteredPassword) {

                        alert("Login Successful!");
                        localStorage.setItem('userEmail', enteredUsername);
                        
                        navigate("/workspace");
                    } else {
                        setPasswordError("Invalid Password");
                    }
                } else {
                    setUsernameError("Invalid Username");
                }
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                alert("Could not connect to the server. Please try again later.");
            });
    };

    return (
        <section className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <p className="login-form-head">LOGIN</p>

                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Email"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <small id="username-error" className="error-message">
                    {usernameError}
                </small>

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <small id="password-error" className="error-message">
                    {passwordError}
                </small>
                <br />
                <br />
                <button type="submit" name="submit" value="Submit" className="btn">Login</button>
                <p className="button-seperator">OR</p>
                <br />
                <button type="button" className="g-btn">
                    <FontAwesomeIcon icon={faGoogle} />
                    {' '}
                    Continue with Google
                </button>
                <p className="login-ques">
                    New to OB-TION?
                    <Link to="/signup"> Register Here</Link>
                </p>
            </form>
        </section>
    );
}


export default Login;
