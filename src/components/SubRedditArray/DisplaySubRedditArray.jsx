import { useContext, useEffect, useState } from "react"
import DisplaySubredditData from "../DisplaySubreddit/DisplaySubredditData"
import themeContext from "../Context/themeContext"

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
                        <DisplaySubredditData key={index} {...{subName ,index}}>
                        </DisplaySubredditData>                
                    )
                })}
            </div>
        </>
    )
}