import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'
const News=(props)=> {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  document.title = `${props.category} - NewsToday`;
  const updateNews=async()=> {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true })
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json()
    props.setProgress(50);
    // console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  useEffect(()=>{
    updateNews();
  },[])
  
  const fetchMoreData = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    // this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }
    return (
      <div className='container my-3'>
        <h1 className='text-center bg-secondary bg-primary text-light rounded p-3'>Top {props.category} Headlines</h1>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        <div className="container d-flex justify-content-center align-items-center">
          {loading && <Loading />}
        </div>
        <div className="container d-flex justify-content-center align-items-center">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<totalResults}
          loader={<Loading/>}
        >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-3" key={element.title}>
                <NewsItem title={element.title ? element.title.slice(0, 44) : ""} mode={props.mode} source={element.source} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q="} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            ))}
          </div>
          </div>
        </InfiniteScroll>
        </div>
      </div>
    )
    News.defaultProps = {
      country: 'in',
      pageSize: 8,
      category: "general"
    }
    News.propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }
  }

export default News
