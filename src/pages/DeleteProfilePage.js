import React from 'react';
import { useProfile } from '../ProfileContext'; 



function DeleteProfilePage() {
  const { profile, setProfile } = useProfile(); 

  const handleDeleteProfile = () => {
    // Delete the profile from the context
    setProfile(null);
    console.log('Deleting profile');
  };

  return (
    <div>
      <h2>Delete Profile Page</h2>
      {profile ? (
        <div>
          <p>Username: {profile.username}</p>
          <button onClick={handleDeleteProfile}>Delete Profile</button>
        </div>
      ) : (
        <p>No profile to delete.</p>
      )}
    </div>
  );
}

export default DeleteProfilePage;
