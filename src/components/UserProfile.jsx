import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [username, setUsername] = useState("Loading...");

  useEffect(() => {
    const currentUserEmail = localStorage.getItem('userEmail');
    
    fetch('https://obtion-backend.onrender.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json(); 
      })
      .then(data => {
        if (Array.isArray(data) && currentUserEmail) {
          const foundUser = data.find(user => 
            user.email.toLowerCase() === currentUserEmail.toLowerCase()
          );
          
          if (foundUser) {
            setUsername(foundUser.name); 
          } else {
            setUsername("User Not Found"); 
          }
        } else {
          setUsername("Guest");
        }
      })
      .catch(err => {
        console.error("Error connecting to serve-json:", err);
        setUsername("Guest (Offline)");
      });
  }, []);

  return <p className="work-user">{username}</p>;
};


export default UserProfile;
