import React, { Component } from 'react';

class Selector extends Component {
	constructor(props) {
    super(props);
    
    this.state = { value: 'Order by'};
  }
  onChange(e) {
    console.log('​Selector -> onChange -> e',  e.target.value);
    this.setState({
      value: e.target.value
    })
  }
  render() {
  	const options = [ "Inbox", "Trasn", "Spam"]
    return (
      <div className="selector">
        <select value={this.state.value} onChange={this.onChange.bind(this)} className="selector-control">
        	{options.map(option => {
          	return <option value={option} key={option} >{option}</option>
        	})}
      	</select>
      </div>
      
    )
  }
}

export default Selector;