import React, { useState } from 'react';
import { useProfile } from '../ProfileContext'; 

function CreateProfilePage() {
  const { setProfile } = useProfile(); 
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setProfile({ username });
    console.log(`Creating profile with username: ${username}`);
  };

  return (
    <div>
      <h2>Create Profile Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default CreateProfilePage;
