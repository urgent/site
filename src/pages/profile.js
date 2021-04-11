import React, { useState, useEffect } from 'react'
import Nav from "../components/Nav";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user)
  }
  if (!user) return null;
  return (
    <div>
      <Nav />
      <h1>Profile</h1>
      <h3>{user.username}</h3>
      <p>{user.attributes.email}</p>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(Profile)