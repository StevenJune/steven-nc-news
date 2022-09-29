import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const {id} = useParams();
  useEffect(() => {
   axios 
     .get("https://be-my-news-example.herokuapp.com/api/articles/" + id)
     .then(function (response) {
       if (!response.statusText === 'OK') {
        setIsError(true)
        setIsLoading(false);
       } else {
        setIsLoading(false);
        setArticle(response.data.article);
       }
     });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error happening........</p>

  return (
    <section>
      <ul>
            <li key={article.article_id}>
            <h4>Article ID : {article.article_id}</h4>   
            <h4>Title : {article.title}</h4> 
            <h4>Topic : {article.topic}</h4>
            <h4>Author : {article.author}</h4>
            <h4>Create At : {article.created_at}</h4>
            <h4>Votes : {article.votes}</h4>
            <h4>Comment Votes : {article.comment_count}</h4>
            <h4>Body : {article.body}</h4>
            </li>
      </ul>
    </section>
  );
}
export default SingleArticle;