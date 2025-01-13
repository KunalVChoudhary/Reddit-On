import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useEffect, useState } from "react";
import './App.css'
import DisplaySubredditData from './components/DisplaySubreddit/DisplaySubredditData';
import HeaderSection from './components/Header/HeaderSection';
import themeContext from './components/Context/themeContext'
import DisplaySubRedditArray from './components/SubRedditArray/DisplaySubRedditArray';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  const [displayTheme, setDisplayTheme]=useState(window.matchMedia('(prefers-color-scheme: dark)').matches); 
  const [subItemBox , setSubItemBox]=useState(['india']);
  const [itemBoxLength, setItemBoxLength]=useState(0);
  const updateBoxLength = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth > 1399.98) {
          setItemBoxLength(3);
          } 
          else if (screenWidth <= 1399.98 && screenWidth > 650) {
          setItemBoxLength(2);
          } 
          else {
          setItemBoxLength(1);
          }
    }
  useEffect(() => {
          updateBoxLength();
          window.addEventListener('resize', updateBoxLength);
          return () => {
              window.removeEventListener('resize', updateBoxLength);
          };
    }, []);
  

  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element=
          {<themeContext.Provider value={{subItemBox, setSubItemBox, displayTheme, setDisplayTheme, itemBoxLength}}>
            <Home/>
            </themeContext.Provider>}
          />
          <Route path='/list' element=
          {<themeContext.Provider value={{subItemBox, setSubItemBox, displayTheme, setDisplayTheme, itemBoxLength}}>
            <HeaderSection {...{displayTheme, setDisplayTheme, }}></HeaderSection>
            <DisplaySubRedditArray></DisplaySubRedditArray>
          </themeContext.Provider>}
          />
        </Routes>
      </BrowserRouter>


)
}

export default App
