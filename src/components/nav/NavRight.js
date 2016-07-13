import React from 'react';
import classNames from 'classnames';
/**
 * Child component of Nav. All child components will be on the right side of the nav
 */
class NavRight extends React.Component {

  static propTypes = {
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
    let clazz = classNames('nav-right', this.props.className);

    return (
      <div className={clazz}>
        {this.props.children}
      </div>
    )
  }
}

export default NavRight;
