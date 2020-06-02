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
    return moment(time).fromNow();
  };


  render() {
    const buttonStyle = {
      background: "none",
      boxShadow: "0px 0px 0px transparent",
      border: "0px solid transparent",
      textShadow: "0px 0px 0px transparent",
      cursor: "pointer",
    };

    if (this.props.item && this.props.item.title) {
      return (
        <li style={{ listStyleType: "none" }}>
          <a className="h5" href={this.props.item.url}>
            {this.props.item.title}{" "}
          </a>{" "}
          (
          <a className="h6" href={this.props.item.url}>
            {this.props.item.url ? this.props.item.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0] : "URL not available"}
          </a>
          )
          <br />
          {(this.props.item.score ? this.props.item.score : this.props.item.points)} points by {this.props.item.author}{" "}
          {this.handleTimestamp(this.props.item.created_at ? this.props.item.created_at : this.props.item.time*1000)} |{" "}
          <button
            style={buttonStyle}
            onClick={this.props.handleHide.bind(this, this.props.item.key)}
          >
            Hide
          </button>{" "}
          |
        </li>
      );
    }else{
      return ""
    }
  }
}

export default ListItem;
