import React from 'react';
import classNames from 'classnames';
/**
 * Tile component
 */
class Tile extends React.Component {

  static propTypes = {
    /**
     * Name of the image to display
     */
    name: React.PropTypes.string.isRequired,
    /**
     * Number of views that the image has
     */
    views: React.PropTypes.number.isRequired,
    /**
     * Image url to display
     */
    image: React.PropTypes.string.isRequired,
    /**
     * Function for parent to properly handle likes
     */
    likeHandler: React.PropTypes.func.isRequired,
    /**
     * Optional extra classes passed in
     */
    className: React.PropTypes.string,
    /**
     * Optional children to be nested in banner
     */
    children: React.PropTypes.node
  }

  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  toggleLike = () => {
    let like = !this.state.liked;
    this.setState({
      liked: like
    })

    this.props.likeHandler(like);
  }

  render() {

    let clazz = classNames('tile', this.props.className, {
      "liked" : this.state.liked
    });

    return (
      <div className={clazz}>
        <div className="tile-data">
          <span>
            {this.props.views} views
          </span>
          <span className="likeButton">
            <i className="fa fa-heart-o" aria-hidden="true" onClick={this.toggleLike}></i>
          </span>
        </div>
        <div className="tile-image">
          <img src={this.props.image} />

        </div>
        <div className="tile-title">
          <span>
            {this.props.name}
          </span>
        </div>
      </div>
    )
  }
}

export default Tile;
