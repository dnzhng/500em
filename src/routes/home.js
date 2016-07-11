import React from 'react';

class Home extends React.Component {

  state = {
    data : {}
  }

  componentDidMount() {
    // fetch("/v1/proxy", {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     method: 'GET',
    //     url: 'gin1.com/healthcheck',
    //     headers: {
    //       'content-type' : 'json'
    //     }
    //   })
    // }).then((response) => {
    //   return response;
    // }).then((data) => {
    //   this.setState({
    //     data: data.json()
    //   })
    // })
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
