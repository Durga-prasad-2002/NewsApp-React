import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  let pageSize=8
  const apiKey=process.env.REACT_APP_API_KEY
  const [mode,setMode]=useState('light')
  
  const toggleMode=()=>{
    if(mode==='dark') {
      setMode("light")
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
  }
  const [progres,setProgres]=useState(0)
  const setProgress=(progress)=>{
    setProgres(progress)
  }
    return (
      <div>
       <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <LoadingBar
        color='#f11946'
        progress={progres}
        onLoaderFinished={() => setProgress}
      />
        <Routes>
          {/* <Route path="/NewsApp-React" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" mode={this.state.mode}/>}>
          </Route> */}
          <Route path="/NewsApp-React" element={<News apiKey={apiKey} setProgress={setProgress} key="general1" pageSize={pageSize} country="in" category="general" mode={mode}/>}></Route>
          <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" mode={mode}/>}>
          </Route>
          <Route path="business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" mode={mode}/>}>
          </Route>
          <Route path="entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" mode={mode}/>}>
          </Route>
          <Route path="science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" mode={mode}/>}>
          </Route>
          <Route path="health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" mode={mode}/>}>
          </Route>
          <Route path="sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" mode={mode}/>}>
          </Route>
          <Route path="technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" mode={mode}/>}>
          </Route>
          <Route path="general" element={<News apiKey={apiKey} setProgress={setProgress} key="general1  " pageSize={pageSize} country="in" category="general" mode={mode}/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
export default App
