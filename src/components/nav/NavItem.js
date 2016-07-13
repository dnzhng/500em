import React from 'react';
import classNames from 'classnames';

/**
 * Nav bar items
 */
class NavItem extends React.Component {
  static propTypes = {
    /**
     * Optional extra classes passed in
     */
    className: React.PropTypes.string,
    /**
     * Optional children to be nested in banner
     */
    children: React.PropTypes.node,
    /**
     * Href prop that the navigation button will direct to
     */
    href: React.PropTypes.string.isRequired
  }

  render() {
    let clazz = classNames('nav-item', this.props.className);
    return (
      <a className={clazz} href={this.props.href}>
        {this.props.children}
      </a>
    )
  }
}

export default NavItem;
