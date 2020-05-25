import React, { Component } from "react";
import moment from "moment";

class ListItem extends Component {
    
    /*state = {
        key: this.props.item.key,
        title: this.props.item.title,
        url: this.props.item.url,
        timeStamp: this.props.item.timeStamp,
        points: this.props.item.points,
        user: this.props.item.user,
        handleHide: this.props.handleHide,
    };*/



  handleTimestamp = (time) => {
    console.log(moment(time).fromNow());
    return moment(time).fromNow();
  };

  render() {
    const buttonStyle = {
      background: 'none',
      boxShadow: '0px 0px 0px transparent',
      border: '0px solid transparent',
      textShadow: '0px 0px 0px transparent', 
      cursor: 'pointer' 
    }
    return (
      <li style={{listStyleType: 'none'}}>
        <a className="h5" href={this.props.item.url}>
          {this.props.item.title}{" "}
        </a>{" "}
        (
        <a className="h6" href={this.props.item.url}>
          {this.props.item.url}
        </a>
        )
        <br />
        {this.props.item.points} points by {this.props.item.user}{" "}
        {this.handleTimestamp(this.props.item.timeStamp)}{" "}
         | <button style={buttonStyle} onClick={this.props.handleHide.bind(this, this.props.item.key)}> 
          Hide
        </button> |
      </li>
    );
  }
}

export default ListItem;
