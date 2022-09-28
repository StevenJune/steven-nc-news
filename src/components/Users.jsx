import { useState, useEffect } from "react";
import axios from "axios";
//import { Route, Routes } from 'react-router-dom';

function Users(prop) {
  const [users, setUsers] = useState([prop.currentUser]);
  const [isLoading,setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log('in ListUser');
//   const [articles, setArticles] = useState([]);
//   const [isLoading,setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
  useEffect(() => {
   axios 
     .get("https://be-my-news-example.herokuapp.com/api/users")
     .then(function (response) {
       // handle success
       console.log(response.statusText,'user reponse obj')
       if (!response.statusText === 'OK') {
        setIsError(true)
        setIsLoading(false);
       } else {
        console.log(response.data.users);
        setIsLoading(false);
        setUsers(response.data.users);
       }
     });
  }, []);
  console.log('end of useEffect')
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error happening........</p>

  return (
    <table>
      <tr>
        <th>Index</th>
        <th>User Name</th>
        <th>Name</th>
        {/* <th>Avatar_URL</th> */}
        <th>Photo</th>
        <th>Current User</th>
      </tr>
     {users.map((user,index) => {
        return (
            <tr key={index}>
            <td>{index}</td>    
            <td>{user.username}</td>   
            <td>{user.name}</td> 
            {/* <td>{user.avatar_url}</td> */}
            <td><img src={user.avatar_url} alt="fff" width="100" height="110"></img></td> 
            <td><button type='button' 
                   onClick={() => {prop.setUser=user.username }}
                   >Pick Me</button></td>
          </tr>
        );
      })}
    </table>
  );
  
}

export default Users;


