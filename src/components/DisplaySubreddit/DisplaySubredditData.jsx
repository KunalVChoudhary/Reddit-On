//import { useContext } from "react"
import fetchSubredditInfo from "../FetchingData/fetchSubredditInfo";
import FetchedSubPosts from "../FetchingData/FetchedSubPosts";
import { useEffect, useState } from "react";
import './DisplaySubredditData.css'
export default function DisplaySubredditInfo({subName}){
    const [subredditName,setSubredditName]= useState(subName)
    const [subResponse,setSubResponse]=useState(null);
    const [reload,setReload]=useState('true')
    useEffect(()=>{
        const fetchData=async ()=>{
            let response= await fetchSubredditInfo(subredditName)
            setSubResponse(response)
            };
        fetchData()
        
    },[subredditName,reload])

    return(
        <>
        <div className="complete-sub">
            <div className="sub-log post-container d-inline-flex row ">
                <div className="sub-name d-inline-flex justify-content-start align-items-center col-10 col-md-9 px-3">r/{subName}</div>
                <div className="sub-reload-close px-2 d-inline-flex justify-content-end align-items-center col-2 col-md-3">
                    <img className="sub-log-icon px-2" src="\icons8-reload-50.png" onClick={()=>{
                    setReload(prev => !prev)
                    }} alt="" />
                    <img className="sub-log-icon px-2" src="\icons8-close-50.png" onClick={()=>{
                    setSubredditName('lol')
                    setReload(prev => !prev)
                    }} alt="" />
                </div>
            </div>
            {subResponse ? (<FetchedSubPosts {...{fetchResponse:subResponse}} >
            </FetchedSubPosts>) : (<div className="sub-not-loaded sub-posts">Loading</div>)}
        </div>
        </>
    )
}