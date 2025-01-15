import { useContext,} from "react"
import DisplaySubredditData from "../DisplaySubreddit/DisplaySubredditData"
import themeContext from "../Context/themeContext"
import './DisplaySubRedditArray.css'

export default function DisplaySubRedditArray(){
    const useThemeContext=useContext(themeContext);

    return(
        <>
            <div className={`subRedditList d-flex ${useThemeContext.displayTheme? 'dark-mode-on' : 'light-mode-on'}`}>
                {useThemeContext.subItemBox.map((subName ,index)=>{
                    if (index>useThemeContext.itemBoxLength-1){
                        return
                    }
                    return(
                        <DisplaySubredditData key={index} {...{subName ,index ,subItemBox:useThemeContext.subItemBox,setSubItemBox:useThemeContext.setSubItemBox}}>
                        </DisplaySubredditData>                
                    )
                })}
            </div>
        </>
    )
}