import React from 'react'

export default function  NewsItem(props){
  
    let {headline, description, imageUrl, newsUrl, source,time} = props;
    let dots='...';
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl? imageUrl: 'https://image.cnbcfm.com/api/v1/image/107094137-1658856244649-gettyimages-1242123750-68053336.jpeg?v=1660717085&w=1920&h=1080'} className="card-img-top" style={{height:'150px'}}alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{headline.split(' - ')[0]}</h5>
            <p className="card-text">{description.split('. ')[0] + dots}</p>
            <p className="card-text"><small className="text-muted">{source}, <br/> at {new Date(time).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </>
    )
  
}
