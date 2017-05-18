import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import '../App.css';

class Giphs extends Component {
  constructor(props){
    super(props);
    this.state= {
    }
  }

  componentWillMount(){

  }

  render() {
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 1900,
      transitionLeaveTimeout: 800
    }

    let giphs = _.map(this.props.giphs, (giph, index)=>{
        return <div key={index} className="item img">
          <a className="fade-enter" href={"https://twitter.com/share?text=" + encodeURIComponent(giph.url)} target="_blank">
            <img src={giph.images.fixed_width.url}  />
          </a>
       </div>
    });

    return (
    <div>
      <h3>Search for Gifs, then click to tweet it!</h3>
      <div className="masonry">
        {giphs}
      </div>
    </div>
    );
  }
}

export default Giphs;
