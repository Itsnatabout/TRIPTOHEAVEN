import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
      
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  // this returns what you want the client to see

  return (
    <>
      <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading....</p>
      ): (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
        ))        
      )}

    </div>

    </>
  )
}

export default App
