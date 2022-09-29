import { useState, useEffect } from "react";
import axios from "axios";
import ReadArticlesByTopic from './ReadArticlesByTopic.jsx';
import "../App.css";

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
    <section>
      <ul>
     {topics.map((topic,index) => {
        return (
            <li id="topicContainer" key={index}>
            <h4>Index : {index}</h4>    
            <h4>Slug : {topic.slug}</h4>   
            <h4>Description : {topic.description}</h4> 
            <button type='button' 
                   onClick={() => {return (<ReadArticlesByTopic currentTopic={topic.slug} />)} }
                   >Read Articlues</button>
          </li>
        );
      })}
      </ul>
    </section>
  );
  
}

export default Topics;


