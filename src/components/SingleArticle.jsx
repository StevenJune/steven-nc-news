import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleArticle(prop) {
  const [articles, setArticles] = useState([prop.current_id]);
  const [isLoading,setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
   axios 
     .get("https://be-my-news-example.herokuapp.com/api/articles/" + prop.current_id)
     .then(function (response) {
       if (!response.statusText === 'OK') {
        setIsError(true)
        setIsLoading(false);
       } else {
        setIsLoading(false);
        setArticles(response.data.articles);
       }
     });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error happening........</p>

  return (
    <section>
      <ul>
     {articles.map((article) => {
        return (
            <li key={article.article_id}>
            <h4>Article ID : {article.article_id}</h4>   
            <h4>Title : {article.title}</h4> 
            <h4>Topic : {article.topic}</h4>
            <h4>Author : {article.author}</h4>
            <h4>Create At : {article.created_at}</h4>
            <h4>Votes : {article.votes}</h4>
            <h4>Comment Votes : {article.comment_count}</h4>
            <h4>Body : {articles.body}</h4>
            </li>
        );
      })}
    </ul>
    </section>
  );
}
export default SingleArticle;