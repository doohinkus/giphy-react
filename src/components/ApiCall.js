import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import '../App.css';
import Giphs from './Giphs.js';

class ApiCall extends Component {
  constructor(props){
    super(props);
    this.state= {
      image: "http://media0.giphy.com/media/guvCWEaSNe7iE/200w.gif"
    }
    this.search = this.search.bind(this);
    this.updateSearch = this.updateSearch.bind(this);

  }
  componentWillMount(){
    // this.search("funny");
  }

search(q){
  let url = `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC`;
  Request
  .get(url)
  // .set('Access-Control-Allow-Origin', 'http://localhost:3000')
  .end((err, data)=>{
    if(err) console.log("Error: ",err)

    this.setState({
     data: data.body.data
   });

  })

}
updateSearch(){
  if(this.refs.query.value !==""){
    this.search(this.refs.query.value);
  }else{
    this.search("funny cats");
  }
}
  render() {
    return (
      <div className="Api">
        <div className='top'>
          GiphyTweet
        </div>
        <div className="hero">
          <div className="form">
            <div className="flexy">
            <input ref="query" type="text" />
            <button onClick={this.updateSearch} className="solid">Search Gifs</button>
            </div>
          </div>
        </div>
         <Giphs giphs={this.state.data} />
      </div>

    );
  }
}

export default ApiCall;
