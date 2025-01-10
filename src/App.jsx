import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import DisplaySubredditData from './components/DisplaySubreddit/DisplaySubredditData';
import HeaderSection from './components/Header/HeaderSection';
import themeContext from './components/Context/themeContext'


function App() {
  const [displayTheme, setDisplayTheme]=useState(window.matchMedia('(prefers-color-scheme: dark)').matches); 

  return (
    <themeContext.Provider value={{displayTheme, setDisplayTheme}}>
      <HeaderSection {...{displayTheme, setDisplayTheme, }}></HeaderSection>
      <DisplaySubredditData {...{subName:'india'}}>
        
      </DisplaySubredditData>
    </themeContext.Provider>
    )
}

export default App
