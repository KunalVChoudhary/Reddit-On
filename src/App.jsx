import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from "react";
import './App.css'
import DisplayMode from './components/DisplayMode/DisplayMode'
import SearchButton from './components/Search Box/SearchButton';

function App() {
  const [displayTheme, setDisplayTheme]=useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
 

  return (
    <>
    <DisplayMode {...{displayTheme, setDisplayTheme, }} />
    <SearchButton {...{displayTheme}} />
    </>
  )
}

export default App
