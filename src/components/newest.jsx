import React, { Component } from "react";
import ListItem from "./listItem";

const API = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
const QUERY = 'https://hacker-news.firebaseio.com/v0/item/';

class Newest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
      isLoading: false,
      items: []
    };
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => response.json())
      .then(data => this.getByIds(data))
      .then(items => this.setState({items: items}));
  }

  handleHide = (key) => {
    this.setState(prevState => ({
        items: prevState.items.filter(el => el.key != key )
    }));
    //const newhits = this.state.hits.filter((item) => item.key != key);
    //this.setState({ hits: newhits });
  };
    
  getByIds = async (ids) => {
    //put all promises in an Array so we can let them run and be awaited
    //await is bad practise in loops and usually does not work
    let requests = [];
    let responses = [];
    console.log(ids)

    for (let id in ids)
        requests.push(fetch(QUERY + id + '.json?print=pretty')
            //Add response to array
            .then(response => response.json())
            .then(data => responses.push(data))
            .catch(err => console.log(err)));

    //Await all requests
    await Promise.all(requests);
    this.setState({isLoading: false});
    //return all responses
    return responses;
}
  styles = {
    margin: 5,
  };

  render() {
    const { items, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }
 
    return (
      <div>
        <ul style={this.styles}>
          {items.map((item) => (
            <ListItem handleHide={this.handleHide} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Newest;
