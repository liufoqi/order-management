import React, { Component } from 'react';
import './test.less';
// import {Button,Popover,Card} from 'antd'
// const content = (
//     <div>
//         <p>Content</p>
//         <p>Content</p>
//     </div>
// );
class App extends Component {

  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

export default App;
