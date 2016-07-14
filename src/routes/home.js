import React from 'react';
import 'whatwg-fetch';
import classNames from 'classnames';
import _ from 'underscore';
import { Nav, NavRight, NavLeft, NavItem } from '../components/nav';
import { Logo } from '../components/logo';
import { Tile } from '../components/tiles/';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [],
      page: 1,
      loading: false,
      liked: [],
      showLikes: false,
      showNSFW: true
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

  showLikes = () => {
    this.setState({
      showLikes: !this.state.showLikes
    })
  }

  toggleNSFW = () => {
    this.setState({
      showNSFW: !this.state.showNSFW
    })
  }

  likeHandler = (like, id) => {
    let photo = _.findWhere(this.state.data, {id : id})
    if (like) {
      this.setState({
        liked: this.state.liked.concat(photo)
      })
    } else {
      this.setState({
        liked : _.without(this.state.liked, photo)
      })

    }
  }

  renderTiles = () => {
    let set = this.state.data;
    if (this.state.showLikes) {
      set = this.state.liked;
    }
    return set.map((photo) => {
      if (!this.state.showNSFW && photo.nsfw) {
        return;
      }
      return <Tile key={photo.id}
                  id={photo.id}
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

    let likeCount = this.state.showLikes ? "View all" : `${this.state.liked.length} Liked`;
    let nsfw = this.state.showNSFW ? "Hide NSFW" : "Show NSFW";
    return (
      <div>
        <Nav height={80}>
          <NavLeft>
            <NavItem href="/"><Logo/></NavItem>
          </NavLeft>
          <NavRight>
            <NavItem href="#">
              <span onClick={this.toggleNSFW}>
              {nsfw}
            </span>
          </NavItem>
            <NavItem href="#" className={hasLikes}>
              <span onClick={this.showLikes}>
              {likeCount}
            </span>
          </NavItem>
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
