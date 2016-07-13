import React from 'react';
import classNames from 'classnames';
/**
 * Tile component
 */
class Tile extends React.Component {

  static propTypes = {
    /**
     * Image url to display
     */
    image: React.PropTypes.string.isRequired,
    /**
     * Optional extra classes passed in
     */
    className: React.PropTypes.string,
    /**
     * Optional children to be nested in banner
     */
    children: React.PropTypes.node
  }

  render() {

    let clazz = classNames('tile', this.props.className);
    return (
      <div className={clazz}>
        <img src={this.props.image} />
      </div>
    )
  }
}

export default Tile;
