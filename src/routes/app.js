import React from 'react';
import { Nav, NavRight, NavLeft, NavItem } from '../components/nav';
import { Logo } from '../components/logo';

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div>
        <Nav height={80}>
          <NavLeft>
            <Logo/>
          </NavLeft>
          <NavRight>
            <NavItem>Liked</NavItem>
          </NavRight>
        </Nav>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
