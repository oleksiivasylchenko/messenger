import React from 'react';

class MesageBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {

    return (
      <div>
        <input onChange={this.onChange.bind(this)}/>
        <button onClick={this.onClick.bind(this)}>Send</button>
      </div>
    )
  };

  onChange (event) {
    this.setState({value: event.target.value});
  }

  onClick () {
    this.props.onSend(this.state.value);
  }

}

export default MesageBox;