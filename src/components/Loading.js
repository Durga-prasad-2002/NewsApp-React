import React, { Component } from 'react'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
export class Loading extends Component {
  render() {
    return (
      <div>
        <lord-icon
            src="https://cdn.lordicon.com/pxruxqrv.json"
            trigger="loop"
            delay="0"
            colors="primary:#4be1ec,secondary:#cb5eee"
            style={{width:'250px',height:'250px'}}>
        </lord-icon>
      </div>
    )
  }
}

export default Loading
