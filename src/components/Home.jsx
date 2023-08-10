import React, { useEffect,useState } from 'react'

import LineChart from "./LineChart";
import { UserData } from "./Data";
const Home = () => {
    useEffect(()=>{
        const tok = localStorage.getItem('token');
        if(!tok){
            // redirect to login page
            window.location.href = '/login'

        }
    })
    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
    const handleClick = () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  return (
    <div style={{ width: 700 }}>
        <LineChart chartData={userData} />

        <button onClick={handleClick}>logout</button>
      </div>
  )
}

export default Home