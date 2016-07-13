import React from 'react';
import { Tile } from '../components/tiles/';

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

  handleScroll = () => {
    let maxHeight = document.body.clientHeight;
    let innerHeight = window.innerHeight;
    let scrollPosition= window.scrollY;
    let totalScrolled = scrollPosition + innerHeight;

    if (totalScrolled + 100 > maxHeight) {
      if (!this.state.loading) {
        this.setState({
          loading: true
        });
        this.getData(this.state.page);
      }
    }

  }

  renderTiles = () => {
    return this.state.data.map((photo) => {
      return <Tile image={photo.image_url} />
    })
  }

  getData = (page) => {
    fetch(`https://api.500px.com/v1/photos?feature=popular&page=${page}&image_size=4&sort=created_at&consumer_key=g34gnWJqKAIyYcrgOIFOjrGJB5XTm2Z9sxoElJbQ`).then((response) => {
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
        {this.renderTiles()}
      </div>
    )
  }
}

export default Home;
