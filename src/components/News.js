// import PropTypes from 'prop-types'
import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=f45a7921963247d0928f086cefd0c0d8&pageSize=20";
let data=await fetch(url);
let parsedData= await data.json()
this.setState({
  articles:parsedData.articles,
  totalResults:parsedData.totalResults
 
})
  }
  handleprev=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f45a7921963247d0928f086cefd0c0d8&page=${this.state.page-1}pageSize
=20`;
    let data=await fetch(url);
    let parsedData= await data.json()
  this.setState({
  page:this.state.page-1,
  articles:parsedData.articles

  })
  }


 handlenext=async()=>{
  if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    console.log("No more pages");
    return;
  }
  else {
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f45a7921963247d0928f086cefd0c0d8&page=${this.state.page+1}&pageSize=20`;
    let data=await fetch(url);
    let parsedData= await data.json()
  this.setState({
  page:this.state.page+1,
  articles:parsedData.articles
  })
}}

  render() {
  return (
      <>
        <div className="container my-3">
          <h1>NewsMonkey -Top Headlines</h1>
      
          <div className="row">
          {this.state.articles && this.state.articles.map((element) =>{
            return  <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title?element.title.slice(0,45):""}
              description={element.description?element.description.slice(0,78):"click on read more"}
                imageUrl={element.urlToImage}
                newsurl={element.url?element.url:""}  
            />
          </div>
          })}
           <div className="container d-flex justify-content-between">
            < button type="button" className="btn btn-dark"  onClick={this.handleprev} disabled={this.state.page<=1}> &laquo; previous </button>
           <button type="button" className="btn btn-dark" onClick={this.handlenext}  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}>next &raquo;</button>
           </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
