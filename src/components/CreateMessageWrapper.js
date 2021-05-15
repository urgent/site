import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { createMessage } from '../../graphql/createMessage'

const initialState = { body: '' }

function CreateMessageWrapper() {
  const [mssg, setMssg] = useState(initialState);
  const [session, loading] = useSession()
  const { body } = mssg;

  function handleChange(evt) {
    setMssg(() => ({ ...mssg, [evt.target.name]: evt.target.value }))
  }

  async function createNewMssg() {
    if (!body) return
    const newMessage = {
      query: createMessage,
      variables: { input: mssg },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    };

  }

  return (
    <>
      {!session && <>
        Not signed in <br />
        <button onClick={signIn}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.name} <br />
        <button onClick={signOut}>Sign out</button>
        <div>
          <h1>Create a new message</h1>
          <input
            onChange={handleChange}
            name="body"
            placeholder="Message Body"
            value={mssg.body}
          />
          <button onClick={createNewMssg}>Create Message</button>
        </div>
      </>}
    </>
  )
}

export default CreateMessageWrapper;