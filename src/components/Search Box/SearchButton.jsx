import { useContext, useRef, useState,useEffect } from "react"
import '../DisplayMode/DisplayMode.css'
import './SearchButton.css'
import themeContext from "../Context/themeContext";

export default function SearchButton(){

    const [searchItem, setSearchItem]= useState('');
    const useThemeContext=useContext(themeContext);
    const closeModalRef=useRef(null);
    const [alertTrack, setAlertTrack]=useState(false)

    useEffect(()=>{
        if (alertTrack)
            {const alertTimer = setTimeout(() => {
            alert(
                `You can track a maximum of ${useThemeContext.itemBoxLength} subreddits at the current viewport. Remove a previous subreddit to add a new one.`
            );
            setAlertTrack(false)
            }, 100);
            return ()=>clearTimeout(alertTimer)}

    },[alertTrack])

    return(
        <>
            <button type="button" className={`btn search-button ${useThemeContext.displayTheme ? 'dark':'light'}`} data-bs-toggle="modal" data-bs-target="#searchModal">
                Search
            </button>

            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" ref={closeModalRef} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pb-3 row d-flex align-items-center justify-content-center">
                    <div className="search-bar row col-11 d-flex align-items-center">
                        <div className="search-icon d-flex align-items-center col-auto">
                            <img className="search-icon-img" src="icons8-search.svg" alt="bar" />
                        </div>
                        <input className="search-input-box col px-3" type="text" autoFocus placeholder="Sub-Reddit" value={searchItem} onChange={(e)=>{
                            setSearchItem(e.target.value);
                        }} onKeyDown={(e)=>{
                            if (e.key==='Enter' && searchItem != ''){
                                if(useThemeContext.subItemBox.length >=useThemeContext.itemBoxLength){
                                    setSearchItem('');
                                    closeModalRef.current.click();
                                    setAlertTrack(true)
                                    return
                                }
                                else{
                                    useThemeContext.setSubItemBox(prev => [...prev, searchItem]);
                                    setSearchItem('');
                                }
                                closeModalRef.current.click();
                            }
                        }} />
                    </div>
                    
                </div>
                
                </div>
            </div>
            </div>
        </>
    )
}