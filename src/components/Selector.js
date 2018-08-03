import React, { Component } from 'react';
import { chageView, currentView } from '../lib/actionCreators';
import store from '../lib/store';

const options = [ "Order by", "Inbox", "Trasn", "Spam"];
class Selector extends Component {
	constructor() {
    super();
    this.chageView = this.chageView.bind(this);
    this.state = { value: 'Order by'};
  }
  onChange(e) {
    if(e.target.value>0)
      this.chageView(e.target.value)
  }

  render() {
    return (
      <div className="selector">
        <select  value={this.state.currentView} onChange={this.onChange.bind(this)} className="selector-control">
          {options.map((option, index) => {
            return <option value={index} key={option} >{option}</option>
          })}
        </select>
      </div>
    )
  }
  chageView(currentView) {
    store.dispatch(chageView(currentView))
  }
}
export default Selector;