import { useState, useEffect } from "react";
import axios from "axios";
import ReadArticlesByTopic from './ReadArticlesByTopic.jsx';

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
   axios 
     .get("https://be-my-news-example.herokuapp.com/api/topics")
     .then(function (response) {
       console.log(response.statusText,'topics response obj')
       if (!response.statusText === 'OK') {
        setIsError(true)
        setIsLoading(false);
       } else {
        console.log(response.data.topics);
        setIsLoading(false);
        setTopics(response.data.topics);
       }
     });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error happening........</p>

  return (
    <table>
      <tr>
        <th>Index</th>
        <th>Slug</th>
        <th>Description</th>
        <th>Get Articles</th>
      </tr>
     {topics.map((topic,index) => {
        return (
            <tr key={index}>
            <td>{index}</td>    
            <td>{topic.slug}</td>   
            <td>{topic.description}</td> 
            <td><button type='button' 
                   onClick={() => {return (<ReadArticlesByTopic currentTopic={topic.slug} />)} }
                   >Read Articlues</button></td>
          </tr>
        );
      })}
    </table>
  );
  
}

export default Topics;


