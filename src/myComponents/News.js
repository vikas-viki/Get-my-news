// import React, { Component} from 'react'
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from 'prop-types'

// export default class News extends Component{
//   articles=[];
  
//   static defaultProps = {
//     country: 'in',
//     category: 'business'
//   }
//   static propTypes={
//     country: PropTypes.string,
//     category:PropTypes.string,
//     setProgress: PropTypes.func,
//   }
    
  
    
//     constructor(props){
//         super(props);
//         this.state={
//             articles: this.articles,
//             loading:true,
//             page:1,
//             results:0
//           }
//         }
//         loadData=async()=>{
//           this.props.setProgress(60)
//           let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=en&apiKey=${this.props.apiKey}&page=${this.state.page}`
//           let data = await fetch(url)
//           this.props.setProgress(70)
//           let parsedData = await data.json()
//           this.props.setProgress(80)
//       this.setState({
//         articles : parsedData.articles,
//         results: parsedData.totalResults,
//         loading:false
//       })
//       this.props.setProgress(100)
//     }
//     fetchMoreData = () => {
//         this.setState({
//           page:this.state.page + 1,
//         });
//         setTimeout(async()=>{
          
//           let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=en&apiKey=${this.props.apiKey}&page=${this.state.page}`;
//           let data = await fetch(url)
//           let parsedData = await data.json()
//           this.setState({
//             articles :this.state.articles.concat(parsedData.articles),
//             results: this.state.results,
//             loading:false
//           })
//         },1000)
//       };
      
      
//       async componentDidMount(){
//         this.loadData();
        
//       }
//       render() {
//         return (
//       <div className="container my-3">
//         <h2 className="text-center mt-5">GMN - Top headlines</h2>
//               {/* {this.state.loading&& <Spinner/> } */}
              
              
//               <InfiniteScroll
//                 dataLength={this.state.articles.length}
//                 next={this.fetchMoreData}
//                 hasMore={this.state.articles.length !== this.state.results}
//                 loader={ <Spinner/>}
//                 >
//             <div className="row">
                
//                 { this.state.articles.map((element,index)=>{
//                 return <div className="col-lg-4 col-xl-3 col-md-6 my-3 " key={index}>
//                     <NewsItem 
//                     headline={element.title}
//                       description={element.description}
//                        imageUrl={element.urlToImage}
//                         newsUrl={element.url}
//                         source={element.source.name}
//                         time={element.publishedAt}
//                         />
//                 </div>

//               })}
//             </div>
//               </InfiniteScroll>
//       </div>
//     )
// }
// }



// -----

import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [results, setResults] = useState(0);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)

  let loadData = async()=>{
        props.setProgress(60)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&language=en&apiKey=${props.apiKey}&page=${page}`
    let data = await fetch(url)
        props.setProgress(70)
    let parsedData = await data.json()
        props.setProgress(80)
    setArticles(parsedData.articles);
    setLoading(false)
    setResults(parsedData.totalResults)
        props.setProgress(100)
        
  }
  const fetchMoreData = async() => {
    setPage(page + 1)
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&language=en&apiKey=${props.apiKey}&page=${page + 1}`;
      let data = await fetch(url)
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setLoading(false)
  };

  useEffect(()=>{
    document.title=`GMN - ${capsPropsCategory(props.category)}`;
    loadData();
    // eslint-disable-next-line
  },[])

  let capsPropsCategory =(category)=>{
    return category.charAt(0).toUpperCase() + category.substr(1).toLowerCase();
}

  return (
    <div className="container my-3">
        <h2 className="text-center mt-5">GMN - {capsPropsCategory(props.category)} headlines</h2>
              {loading&& <Spinner/> }
              
              
              <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}                                 
                // hasMore={articles.length!== results}
                hasMore={articles.length!== results}
                loader={ <Spinner/>}
              >
            <div className="row">
                
                { articles.map((element,index)=>{
                return <div className="col-lg-4 col-xl-3 col-md-6 my-3 " key={index}>
                    <NewsItem 
                    headline={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      source={element.source.name}
                      time={element.publishedAt}
                      />
                </div>

              })}
            </div>
              </InfiniteScroll>
      </div>
  )

}

News.defaultProps = {
      country: 'in',
      category: 'business',
    }
    News.propTypes={
      country: PropTypes.string,
      category:PropTypes.string,
      setProgress: PropTypes.func
    }
