import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [],
      page: 1,
      loading: false
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.getData(this.state.page);
  }

  handleScroll = (e) => {
    let maxHeight = document.body.clientHeight;
    let innerHeight = window.innerHeight;
    let scrollPosition= window.scrollY;
    let totalScrolled = scrollPosition + innerHeight;

    if (totalScrolled + 100 > maxHeight) {
      if (!this.state.loading) {
        this.setState({
          loading: true
        });
        console.log("sldfksdlfksdlfkd");
        this.getData(this.state.page);
      }
    }

  }

  getData = (page) => {
    fetch(`https://api.500px.com/v1/photos?feature=popular&page=${page}&consumer_key=g34gnWJqKAIyYcrgOIFOjrGJB5XTm2Z9sxoElJbQ`).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        page: this.state.page + 1,
        loading: false,
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
