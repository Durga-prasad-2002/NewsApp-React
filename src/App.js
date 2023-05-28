import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize=8
  constructor(){
    super();
    console.log("App constructor");
    this.state={
        mode:'light'
    }
  }
  toggleMode=()=>{
    if(this.state.mode==='dark') {
      this.setState({mode:"light"});
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    else {
      this.setState({mode:"dark"});
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
  }
  render() {
    return (
      <div>
       <BrowserRouter>
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
        <Routes>
          <Route path="/NewsApp-React" element={<News pageSize={this.pageSize} country="in" category="general" mode={this.state.mode}/>}>
          </Route>
          <Route path="/" element={<News pageSize={this.pageSize} country="in" category="general" mode={this.state.mode}/>}>
          </Route>
          <Route path="business" element={<News pageSize={this.pageSize} country="in" category="business" mode={this.state.mode}/>}>
          </Route>
          <Route path="entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment" mode={this.state.mode}/>}>
          </Route>
          <Route path="science" element={<News pageSize={this.pageSize} country="in" category="science" mode={this.state.mode}/>}>
          </Route>
          <Route path="health" element={<News pageSize={this.pageSize} country="in" category="health" mode={this.state.mode}/>}>
          </Route>
          <Route path="sports" element={<News pageSize={this.pageSize} country="in" category="sports" mode={this.state.mode}/>}>
          </Route>
          <Route path="technology" element={<News pageSize={this.pageSize} country="in" category="technology" mode={this.state.mode}/>}>
          </Route>
          <Route path="general" element={<News pageSize={this.pageSize} country="in" category="general" mode={this.state.mode}/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

