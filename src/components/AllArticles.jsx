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
    <table>
      <tr>
        <th>Article ID</th>
        <th>Title</th>
        <th>Topic</th>
        <th>Author</th>
        <th>Create At</th>
        <th>Votes</th>
        <th>Comment Votes</th>
        <th>Go Detail</th>
      </tr>
     {articles.map((article) => {
        return (
            <tr key={article.article_id}>
            <td>{article.article_id}</td>   
            <td>{article.title}</td> 
            <td>{article.topic}</td>
            <td>{article.author}</td>
            <td>Created : {article.created_at}</td>
            <td>Votes : {article.votes}</td>
            <td>Comment Votes : {article.comment_count}</td>
            <button type='button' onClick={() => {return <SingleArticle current_id={article.article_id} /> }} >Article Reading</button>
          </tr>
        );
      })}
    </table>
  );
}
export default AllArticles;
