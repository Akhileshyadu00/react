import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
// const [data, setData] = useState([])
//     useEffect(()=> {
//         fetch('https://api.github.com/users/akhileshyadu00')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             setData(data)
//         })
//     }, [])


  return (
    <div >
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git picture' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/akhileshyadu00')
  return response.json()
}
