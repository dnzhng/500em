import React from 'react';

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
