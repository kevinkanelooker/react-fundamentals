// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

// const ErrorMessage = () => (
//   <div role="alert" style={{color: 'red'}}>
//     Username must be lower case
//   </div>
// )

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  // const validUsername = username.toLowerCase() === username

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={e => setUsername(e.target.value.toLowerCase())}
          id="username"
          type="text"
          value={username}
        />
        {/* {!validUsername && <ErrorMessage />} */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
