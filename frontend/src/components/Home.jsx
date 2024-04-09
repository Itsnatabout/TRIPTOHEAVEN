import {useEffect} from 'react'
import CheckLogin from './CheckLogin'


const Home = () => {
    const user= CheckLogin();

  
  return (
    <div>
          <h1>Hi! {user}</h1>
    </div>
  )
}

export default Home
