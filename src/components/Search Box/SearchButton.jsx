import { useState } from "react"
import '../DisplayMode/DisplayMode.css'
import './SearchButton.css'
import fetchSubredditInfo from "../FetchingData/fetchSubredditInfo"

export default function SearchButton({displayTheme}){

    const [searchItem, setSearchItem]= useState('')

    return(
        <>
            <button type="button" className={`btn search-button ${displayTheme ? 'dark':'light'}`} data-bs-toggle="modal" data-bs-target="#searchModal">
                Search
            </button>


            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body row d-flex align-items-center justify-content-center">
                    <div className="search-bar row col-11 d-flex align-items-center">
                        <div className="search-icon col-auto">
                            <img className="search-icon-img" src="icons8-search.svg" alt="bar" />
                        </div>
                        <input className="search-input-box col" type="text" placeholder="Sub-Reddit" value={searchItem} onChange={(e)=>{
                            setSearchItem(e.target.value);
                            console.log(searchItem);
                        }} onKeyDown={(e)=>{
                            if (e.key==='Enter'){
                                fetchSubredditInfo(searchItem);
                                console.log('enter');
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