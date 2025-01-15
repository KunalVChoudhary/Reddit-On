import { useContext, useEffect } from "react";
import DisplayMode from "../DisplayMode/DisplayMode";
import SearchButton from "../Search Box/SearchButton";
import './Home.css'
import themeContext from "../Context/themeContext";
import { useNavigate } from "react-router-dom";
export default function Home(){
    const useThemeContext=useContext(themeContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (useThemeContext.subItemBox.length > 0) {
        console.log('object');
        navigate("/list");
      }
    }, [useThemeContext.subItemBox, navigate]);
    return(
        <>
            <div className={`home d-flex flex-column justify-content-center align-items-center ${useThemeContext.displayTheme? 'dark-mode-on' : 'light-mode-on'}`}>
                <div className="middle-screen text-center">
                    <div className="app-logo m-3">
                        <img src="/icons8-reddit.svg" alt="App Icon" className="app-img" />
                    </div>
                    <div className="app-text m-3">
                        <div className="app-name">
                            Reddit-On
                        </div>
                        <div className="app-about">
                        A browser-based Reddit client to explore multiple subreddits in customizable lanes. Users can add lanes, fetch posts dynamically, and save preferences with local storage for a seamless experience.
                        </div>
                    </div>
                    <div className="search-subreddit m-3">
                        <SearchButton/>
                    </div>
                    <div className="github-logo m-3">
                        <a href="https://github.com/KunalVChoudhary" target='_blank' className="github-link">
                            <button className={`btn search-button`}>Github</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-top-theme d-flex justify-content-end p-3 position-absolute top-0">
                    <DisplayMode {...{displayTheme:useThemeContext.displayTheme,setDisplayTheme:useThemeContext.setDisplayTheme}}/>
            </div>
        </>
    )
}