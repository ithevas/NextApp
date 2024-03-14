import axios from 'axios';
import React from 'react'

async function getUserDetails() {
    try {
      const response = await axios.get("http://localhost:3000/api/user")
      return response.data;
    }
    catch (e) {
      console.log(e);
    }
  }

const Home = async () => {
    const Data = await getUserDetails();

  return (
    <div className="py-16 px-6">
      Hi, from &nbsp;
      {Data.username} <br />
      {Data.email} 
    </div>
  )
}

export default Home