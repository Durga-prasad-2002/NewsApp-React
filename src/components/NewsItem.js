import React from 'react'

const NewsItem=(props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3 d-flex justify-content-center">
        <div className={`card bg-${props.mode}`} style={{width: '18rem',color:props.mode==="dark"?"white":"black"}}>
        <span className="badge text-bg-danger" style={{position:'absolute'}}>{props.source.name}</span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Details</a>
            </div>
        </div>
      </div>
    )
  }

export default NewsItem
