import { useContext } from "react";
import HeaderSection from "../Header/HeaderSection";
import DisplaySubRedditArray from "../SubRedditArray/DisplaySubRedditArray";
import themeContext from "../Context/themeContext";
import './List.css'

export default function List(){
    const useThemeContext=useContext(themeContext);
    return(
        <div className={`list ${useThemeContext.displayTheme? 'dark-mode-on' : 'light-mode-on'}`}>
            <HeaderSection {...{displayTheme: useThemeContext.displayTheme, setDisplayTheme:useThemeContext.setDisplayTheme, }}></HeaderSection>
            <DisplaySubRedditArray></DisplaySubRedditArray>
        </div>
    )
}
