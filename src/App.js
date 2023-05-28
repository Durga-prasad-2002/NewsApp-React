import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=8
  apiKey=process.env.REACT_NEWS_API_KEY
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
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
       <BrowserRouter>
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.state.setProgress}
      />
        <Routes>
          {/* <Route path="/NewsApp-React" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" mode={this.state.mode}/>}>
          </Route> */}
          <Route path="/NewsApp-React" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general1" pageSize={this.pageSize} country="in" category="general" mode={this.state.mode}/>}></Route>
          <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" mode={this.state.mode}/>}>
          </Route>
          <Route path="business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" mode={this.state.mode}/>}>
          </Route>
          <Route path="entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" mode={this.state.mode}/>}>
          </Route>
          <Route path="science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" mode={this.state.mode}/>}>
          </Route>
          <Route path="health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" mode={this.state.mode}/>}>
          </Route>
          <Route path="sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" mode={this.state.mode}/>}>
          </Route>
          <Route path="technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" mode={this.state.mode}/>}>
          </Route>
          <Route path="general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general1  " pageSize={this.pageSize} country="in" category="general" mode={this.state.mode}/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

