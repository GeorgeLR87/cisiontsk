
//Task 2 

import {useState} from 'react'

const Task2 = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(`UserName: ${username}`);
    console.log(`Password: ${password}`);
  }

  const enabled = username.length > 0 && password.length > 0;


  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="username"
          >
            Username: 
          </label>
          <input
            id="username"
            type='text'
            placeholder="Username"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
          >
            Password: 
          </label>
          <input
            id="password"
            type='password'
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={!enabled}
        >
          Login
        </button>
        
        
      </form>
    </>
  )
}

export default Task2

