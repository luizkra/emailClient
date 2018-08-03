import React, { Component } from 'react';
import { chageView, currentView } from '../lib/actionCreators';
import store from '../lib/store';

const options = [ "Order by", "Inbox", "Trash", "Spam"];
class Selector extends Component {
	constructor() {
    super();
    this.chageView = this.chageView.bind(this);
    this.state = { value: 'Order by'};
    this.chageView(0)
  }
  onChange(e) {
    console.log('​Selector -> onChange -> e', e);
    if(e.target.value > 0){
      console.log('​Selector -> onChange -> e.target.value', e.target.value);
      this.chageView(e.target.value)
    }

  }

  render() {
    return (
      <div className="selector">
        <select  value={this.state.currentView} onChange={(e) => this.onChange(e)} className="selector-control">
          {options.map((option, index) => {
            return <option value={index} key={index} >{option}</option>
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