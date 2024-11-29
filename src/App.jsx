import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from "react";
import './App.css'
import DisplayMode from './components/DisplayMode/DisplayMode'

function App() {
  const [displayTheme, setDisplayTheme]=useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
 

  return (
    <DisplayMode {...{displayTheme, setDisplayTheme, }}></DisplayMode>
  )
}

export default App
