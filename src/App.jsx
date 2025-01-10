import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import DisplayMode from './components/DisplayMode/DisplayMode'
import SearchButton from './components/Search Box/SearchButton';
import fetchSubredditInfo from './components/FetchingData/fetchSubredditInfo';
import FetchedSubPosts from './components/FetchingData/FetchedSubPosts'
import DisplaySubredditInfo from './components/DisplaySubreddit/DisplaySubredditData';


function App() {
  //const [displayTheme, setDisplayTheme]=useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

 

  return (
    <BrowserRouter>
    {/* <DisplayMode {...{displayTheme, setDisplayTheme, }} />
    <SearchButton {...{displayTheme}} /> */}
    {/* {subResponse? (<FetchedSubPosts {...{fetchResponse:subResponse}} />) : (<p>Kunal</p>)} */}
      <DisplaySubredditInfo {...{subName:'india'}}>
        
      </DisplaySubredditInfo>
    
    </BrowserRouter>
  )
}

export default App
