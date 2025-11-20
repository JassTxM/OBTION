import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 

function Signup() {

    useEffect(() => {
    document.title = 'OBTION | SignUp';
  }, []); 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        setNameError('');
        setEmailError('');
        setPassError('');

        if (name.trim() === '') {
            setNameError('Name is required');
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email');
            valid = false;
        }

        if (password.length < 6 || password.length > 12) {
            setPassError('Password must be between 6 and 12 characters');
            valid = false;
        }

        if (valid) {
            const userData = { name: name.trim(), email, password };

            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('User registered:', data);
                navigate('/login'); 
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Try again.');
            });
        }
    };

    return (
        <section className="signup-container">

            <form className="signup-form" onSubmit={handleSubmit}>
                <p className="signup-form-head">REGISTER AS USER</p>

                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                 <small id="name-error" className="error-message">
                    {nameError}
                </small>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <small id="email-error" className="error-message">
                    {emailError}
                </small>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
  <small id="password-error" className="error-message">
                    {passError}
                </small>
                <br />
                <br />
                <button type="submit" name="submit" value="Submit" className="btn">SignUp</button>
                <p className="button-seperator">OR</p>
                <br />
                <button type="button" className="g-btn">

                    <FontAwesomeIcon icon={faGoogle} />
                    {' '}
                    Continue with Google
                </button>
                <p className="signup-ques">
                    Already an User? 
                    <Link to="/login"> Login</Link>
                </p>
            </form>
        </section>
    );
}

export default Signup;