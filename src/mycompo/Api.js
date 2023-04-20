import React, { useState, useEffect } from 'react';
import Card from './Card'
import Spinner from './Spinner'
function Api() {
  const [articles, setArticles] = useState([]);
  const [pagesize, setpagesize] = useState(6);
  const [load, setload] = useState(false);
useEffect(() => {
 async function fetchArticles() {
  setload(true) 
const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=${pagesize}&apiKey=302536f343ce42879fdd7a1d10740764`);
        const data = await response.json();
        setArticles(data.articles);
       setload(false) 
    }

    fetchArticles();
  }, [pagesize]);
  return (
    <div className='container'>
     <div className="row">
   
    <div className=" col-12 text-center">
        <h1 className='text-secondary text-center'>Sporty News <img src="icon.png" alt="" srcset="" style={{height:"100px"}}/></h1> 
        {load && <Spinner />}
    </div>
    </div>
      <div className="row">
     
      {articles.map(article => 
      (    
          <div className='col-md-3 mt-5 mx-3  d-flex flex-wrap'>
           
        <Card title={article.title} author={article.author} publishedAt={article.publishedAt}
        urlToImage={article.urlToImage} 
         content= {article.content} url={article.url}
        />  </div>
      
      ))}
      

    </div> <div className="text-center"> <button className='btn btn-primary mt-5 '  onClick={()=>{setpagesize(pagesize + 6)}}> <h4> See More</h4> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
</svg></button></div> 
    </div>
  );
}

export default Api;