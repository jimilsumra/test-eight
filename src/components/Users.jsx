import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data => setUsers(data));

    },[]);
;


  return (
    <>
    <h2>Welcome users</h2>
    <div>
    <ul >
        {users.map(user=> (
            <li style={{borderBottom: '2px solid #eee'}}>
                <div>
                    <h4><strong>ID: </strong>{user.id}</h4>
                    <h4><strong>Name: </strong><Link to={`/user/${user.id}`} >{user.name}</Link></h4>
                    <h4><strong>UserName: </strong>{user.username}</h4>
                    <h4><strong>Email: </strong>{user.email}</h4>
                    <h4><strong>Address: </strong>{user.address.street},<br/>{user.address.suite},<br/>{user.address.city} - {user.address.zipcode}</h4>
                    <h4><strong>Geo Location: </strong>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</h4>
                    <h4><strong>Phone: </strong>{user.phone}</h4>
                    <h4><strong>Website: </strong>{user.website}</h4>
                    <h4><strong>Company: </strong>{user.company.name}</h4>
                </div>
            </li>
        ))}
    </ul>
    </div>
    </>

  )
}

export default Users