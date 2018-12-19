import React from 'react';
import MesageBox from './components/messageBox';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {

    return (
      <div onClick={this.onClick.bind(this)}>
        Hello, {this.props.message}!
        {this.state.count}
        <MesageBox onSend={this.onSend.bind(this)}/>
      </div>
    )
  };

  onClick() {
    this.setState({count: 1});
  }

  onSend(message) {
    console.log(message, 'message');
  }
}

export default App;
