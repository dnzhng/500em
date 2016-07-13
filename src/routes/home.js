import React from 'react';
import { Nav, NavRight, NavLeft, NavItem } from '../components/nav';
import { Logo } from '../components/logo';
import { Tile } from '../components/tiles/';
import classNames from 'classnames'
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [],
      page: 1,
      loading: false,
      liked: 0
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

  likeHandler = (like) => {
    if (like) {
      this.setState({
        liked : this.state.liked + 1
      })
    } else {
      this.setState({
        liked : this.state.liked - 1
      })

    }
  }

  renderTiles = () => {
    return this.state.data.map((photo) => {
      return <Tile key={photo.id}
                  image={photo.image_url}
                  name={photo.name}
                  views={photo.times_viewed}
                  likeHandler={this.likeHandler}/>
    })
  }

  getData = (page) => {
    fetch(`https://api.500px.com/v1/photos?feature=popular&page=${page}&image_size=4&consumer_key=g34gnWJqKAIyYcrgOIFOjrGJB5XTm2Z9sxoElJbQ`).then((response) => {
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
    let hasLikes = classNames({
      "likes" : this.state.liked
    })
    return (
      <div>
        <Nav height={80}>
          <NavLeft>
            <NavItem href="/"><Logo/></NavItem>
          </NavLeft>
          <NavRight>
            <NavItem href="liked" className={hasLikes}>{this.state.liked} Liked</NavItem>
          </NavRight>
        </Nav>
        <div className="content">
          <div className="home tiles">
            {this.renderTiles()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
