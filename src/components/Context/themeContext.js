import { createContext } from "react";

const themeContext = createContext({
    displayTheme: '',
    setDisplayTheme: ()=>{}
});

export default  themeContext;