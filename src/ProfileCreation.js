import React, { useState } from 'react';

function ProfileCreation() {
  const [experience, setExperience] = useState('');
  const [culture, setCulture] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you might want to do something with the form data
    console.log({ experience, culture });
    alert('Profile Created!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Your Profile</h2>
      <label>
        Experience Level:
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </label>
      <label>
        Cultural Preferences:
        <input
          type="text"
          value={culture}
          onChange={(e) => setCulture(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProfileCreation;
