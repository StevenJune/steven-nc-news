import { useState, useEffect } from "react";
import axios from "axios";
//import { Route, Routes } from 'react-router-dom';

function SingleArticle(prop) {
  const [articles, setArticles] = useState([prop.current_id]);
  const [isLoading,setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log('in Single Article');
  useEffect(() => {
   axios 
     .get("https://be-my-news-example.herokuapp.com/api/articles/" + prop.current_id)
     .then(function (response) {
       // handle success
       console.log(response.statusText,'response obj from singlearticle')
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
  console.log('end of useEffect')
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error happening........</p>

  return (

    //  {articles.map((article) => {
        //return (

      <table>
      <tr>
      <th>Article ID**</th>
      <th>Title</th>
      <th>Topic</th>
      <th>Author</th>
      <th>Create At</th>
      <th>Votes</th>
      <th>Comment Votes</th>
      </tr>
    
            <tr key={articles.article_id}>
            <td>{articles.article_id}</td>   
            <td>{articles.title}</td> 
            <td>{articles.topic}</td>
            <td>{articles.author}</td>
            {/* <img src={article.img_url} alt="fff" width="100" height="110"></img> */}
            <td>{articles.created_at}</td>
            <td>{articles.votes}</td>
            <td>{articles.comment_count}</td>
            </tr>
            <tr key={'0'}> 
            <td>{articles.body}</td>
            </tr>
            
       </table>
  );
}
export default SingleArticle;