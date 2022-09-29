import "../App.css";
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
    <section>
      <ul>  
     {users.map((user,index) => {
        return (
            <li id="userContainer" key={index}>
            <h4>Index : {index}</h4>
            <h4>User Name : {user.username}</h4>   
            <h4>Name : {user.name}</h4>
            <img src={user.avatar_url}  width="30" height="30"></img>
            <button type='button' 
                   onClick={() => {prop.setUser=user.username }}
                   >Pick Me</button>
          </li>
        );
      })}
      </ul>
    </section>
  );
  
}

export default Users;
//<div id="myDIV">
//  <div class="item1">1</div>
//  <div class="item2">2</div>
//  <div class="item3">3</div>
//  <div class="item4">4</div>
//  <div class="item5">500</div>
//  <div class="item6">6</div>
//</div>

