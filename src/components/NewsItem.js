import React from 'react'

const NewsItem = (props) => {
  let {title, description, author, date, imageUrl, newsUrl, source} = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: 0
        }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl?imageUrl:"https://images.odishatv.in/uploadimage/library/16_9/16_9_0/recent_photo_1708425586.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className='text-muted'>By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem