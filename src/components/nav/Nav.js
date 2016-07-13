import React from 'react';
import classNames from 'classnames';
/**
 * Navbar component
 */
class Nav extends React.Component {

  static propTypes = {
    /**
     * Pass in the specific height in pixels
     */
    height: React.PropTypes.number.isRequired,
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
    let style = {
      height : this.props.height + "px"
    }

    let clazz = classNames('nav', this.props.className);
    return (
      <div className={clazz} style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default Nav;
