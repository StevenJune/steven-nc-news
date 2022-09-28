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
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error happening........</p>

  return (
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