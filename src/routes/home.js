import React from 'react';

class Home extends React.Component {

  state = {
    data : [],
    page: 1
  }

  componentDidMount() {
    this.getData(this.state.page);
  }

  getData(page) {
    fetch(`https://api.500px.com/v1/photos?feature=popular&page=${page}&consumer_key=g34gnWJqKAIyYcrgOIFOjrGJB5XTm2Z9sxoElJbQ`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        page: this.state.page + 1,
        data: this.state.data.concat(data.photos)
      })
    })
  }

  render() {
    return (
      <div className="home">
        {JSON.stringify(this.state.data)}
      </div>
    )
  }
}

export default Home;
