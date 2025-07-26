import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User  = () => {
  

  const [singleUser, setSingleUser] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(response=>response.json())
    .then(data=>setSingleUser(data))
  },[]);
  
  return (
    <>
    <div>user Single</div>
    <ul>
       <li><strong>ID: </strong>{singleUser.id}</li>
       <li><strong>Name: </strong>{singleUser.name}</li>
      <h4><strong>UserName: </strong>{singleUser.username}</h4>
      <h4><strong>Email: </strong>{singleUser.email}</h4>
   
    </ul>
    </>
  )
}
 
export default User