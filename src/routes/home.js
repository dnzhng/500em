import React from 'react';
import 'whatwg-fetch';
import _ from 'underscore';
import { Nav, NavRight, NavLeft, NavItem } from '../components/nav';
import { Logo } from '../components/logo';
import { Tile } from '../components/tiles/';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [], //initial data state
      page: 1, //first only fetch the first page of data
      loading: false, //default loading
      liked: [], //initial photos liked
      showLikes: false, //do not show likes by default
      showNSFW: true //show NSFW by default
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.getData(this.state.page);
  }
  /**
   * This calculates scroll position by using the windows inner height
   * and the scroll position. It then determines if the amount scrolled
   * is greater than the height of the content on the screen. If so,
   * it will fetch the next set of data.
   */
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

/**
 * Toggles the showLikes state to display only photos liked or not
 */
  showLikes = () => {
    this.setState({
      showLikes: !this.state.showLikes
    })
  }

/**
 * Toggles the showNSFW state to display NSFW photos or not
 */
  toggleNSFW = () => {
    this.setState({
      showNSFW: !this.state.showNSFW
    })
  }

/**
 * Adds/removes the photo data of the photo that is liked/unliked to the liked array
 * @param  {[boolean]} like [determines whether the photo is liked or unliked]
 * @param  {[number]} id   [the ID of the photo to add / remove]
 */
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

/**
 * Creates Tile components for each photo. Will display all photos or only liked photos depending
 * on the showLikes state. Will also hide NSFW photos if this.state.showNSFW is false;
 */
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

/**
 * pulls data from the 500px popular api
 * @param  {[number]} page [the page of the results to return ]
 */
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
            <NavItem href="#">
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
