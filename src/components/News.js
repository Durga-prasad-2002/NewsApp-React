import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props) {
    super(props);
    // console.log("component constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.props.category} - NewsToday`;
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11fa8a5f7c5e491e99f7815e9a0042c7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews();
  }
  // handleNextClick =async()=>{
  //   this.setState({page:this.state.page+1});
  //   this.updateNews();
  // }
  // handlePrevClick =async()=>{
  //   this.setState({page:this.state.page-1});
  //   this.updateNews();
  // }
  fetchMoreData = async ()=>{
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11fa8a5f7c5e491e99f7815e9a0042c7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading:false
    })
    console.log("fetching");
    console.log(this.state.articles.length);
    console.log(this.state.totalResults);
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center bg-secondary bg-primary text-light rounded p-3'>Top {this.props.category} Headlines</h1>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        <div className="container d-flex justify-content-center align-items-center">
          {this.state.loading && <Loading />}
        </div>
        <div className="container d-flex justify-content-center align-items-center">
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<Loading/>}
        >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 44) : ""} mode={this.props.mode} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q="} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            ))}
          </div>
          </div>
        </InfiniteScroll>
        </div>
      </div>
    )
  }
}

export default News
