import React from 'react'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
const Loading=()=> {
 
    return (
      <div className='container d-flex justify-content-center align-items-center'>
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

export default Loading
