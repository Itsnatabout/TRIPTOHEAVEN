import {useEffect} from 'react'
import axios from "axios"
import Header from "./Header"
import Book from "./Book"
import { Link, useNavigate } from "react-router-dom"

const Booking = () => {

    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/airports');
          return console.log(response.data); // Assuming the response contains the data you need
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error; // Rethrow the error to handle it in the calling code
        }
      };

    fetchData();

  return (
    <>
          <Header />
          <Book/>
          {/* note future self:
          You will need to pass the response here as a prop to display it.
          getting the data from the server is now ok. 
          
          */}

    </>
  )
}

export default Booking
