import React, { useState, useEffect } from 'react'
import Nav from "../components/Nav";

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);
  async function checkUser() {

  }
  if (!user) return null;
  return (
    <div>
      <Nav />
      <h1>Profile</h1>
      <h3>{user.username}</h3>
      <p>{user.attributes.email}</p>
    </div>
  )
}

export default Profile