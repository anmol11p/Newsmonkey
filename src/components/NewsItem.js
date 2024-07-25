// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
let {title,description,imageUrl,newsurl}=this.props;

    return (
        <>
        <div  className='my-3'> 
        <div className="card" style={{width:"18rem"}}>
        <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjp5jjw8oTsE0TUtUJuo0ahese0svE0JV2Q&s":imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}....</p>
          <a href={newsurl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default NewsItem