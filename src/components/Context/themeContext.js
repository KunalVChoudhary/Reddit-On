import { createContext } from "react";

const themeContext = createContext({
    subItemBox:[],
    setSubItemBox:()=>{},
    displayTheme: '',
    setDisplayTheme: ()=>{},
    itemBoxLength:0,
});

export default  themeContext;