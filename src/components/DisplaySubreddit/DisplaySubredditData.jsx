import fetchSubredditInfo from "../FetchingData/fetchSubredditInfo";
import FetchedSubPosts from "../FetchingData/FetchedSubPosts";
import { useEffect, useState } from "react";
import './DisplaySubredditData.css'


export default function DisplaySubredditData({subName ,index, subItemBox, setSubItemBox}){
    const [subredditName,setSubredditName]= useState(subName)
    const [subResponse,setSubResponse]=useState(false);
    const [subExistence,setSubExistence]=useState(true)
    const [reload,setReload]=useState(false)
    useEffect(()=>{
        const fetchData=async ()=>{
            let [response,existence]= await fetchSubredditInfo(subredditName)
            setSubResponse(response)
            setSubExistence(existence)
            };
        fetchData()
    },[subredditName,reload]);

    useEffect(()=>{
        if (!subExistence){
            const timer=setTimeout(()=>{
                const newItemBox=[...subItemBox]
                newItemBox.splice(index,1)
                setSubItemBox(newItemBox)
            },3000)
        return ()=>clearTimeout(timer)
        }
    })


    return(
        <div className="complete-sub" key={index}>
            <div className="sub-log post-container d-inline-flex row ">
                <div className="sub-name d-inline-flex justify-content-start align-items-center col-10 col-md-9 px-3">r/{subName}</div>
                <div className="sub-reload-close px-2 d-inline-flex justify-content-end align-items-center col-2 col-md-3">
                    <img className="sub-log-icon px-2" src="\icons8-reload-50.png" onClick={()=>{
                        setReload(prev=>!prev);
                        setSubResponse(null)
                    }} alt="" />
                    <img className="sub-log-icon px-2" src="\icons8-close-50.png" onClick={()=>{
                        const newItemBox=[...subItemBox]
                        newItemBox.splice(index,1)
                        setSubItemBox(newItemBox)
                    }} alt="" />
                </div>
            </div>
            {subResponse ? (<FetchedSubPosts {...{fetchResponse:subResponse}} >
            </FetchedSubPosts>) : (<div className="sub-not-loaded sub-posts p-3">
                {subExistence ? 'Loading...' : `r/${subName} Doesn't Exist (Automatic Closure of Request in 3 seconds)`}</div>)}
        </div>
    )
}
