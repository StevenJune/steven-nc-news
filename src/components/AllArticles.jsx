import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleArticle from './SingleArticle.jsx';

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
   axios 
     .get("https://be-my-news-example.herokuapp.com/api/articles")
     .then(function (response) {
       if (!response.statusText === 'OK') {
        setIsError(true)
        setIsLoading(false);
       } else {
        console.log(response.data.articles);
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
            <li id= "AllArticlesContainer" key={article.article_id}>
            <h4>Article ID : {article.article_id}</h4>   
            <h4>Title : {article.title}</h4> 
            <h4>Topic : {article.topic}</h4>
            <h4>Author : {article.author}</h4>
            <h4>Create At : {article.created_at}</h4>
            <h4>Votes : {article.votes}</h4>
            <h4>Comment Votes : {article.comment_count}</h4>
            <button type='button' onClick={() => {return <SingleArticle current_id={article.article_id} /> }} >Article Reading</button>
            </li>
        );
      })}
    </ul>
    </section>
  );
}
export default AllArticles;
