import React from 'react'

export default function Card(props) {
    let {urlToImage,title,content,url,author,publishedAt}=props
  return (
  <div className="card " style={{width: "18rem", border:"2px solid green"}}>
    <h6 className='bg-dark text-light'>{author}</h6>
  <img src={urlToImage} className="card-img-top " alt="error" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{content}</p> 
    <span className="badge text-bg-dark my-4 p-3 d-flex flex-wrap word-wrap">{publishedAt}</span>
    <a href={url} target={'_blank'} rel="noreferrer" className="btn btn-primary">Read More...</a>
   
</div>
</div>
  )
}
