import './FetchedSubPosts.css'

export default function fetchedSubPosts({fetchResponse}){
    
   return(
    <div className='sub-posts'>
    {
        fetchResponse.map((post,index)=>{
            return (
                    <div className="post-container" key={index}>
                        <div className="post d-flex align-items-center row" onClick={()=>{
                            window.open(post['data']['url'], '_blank');
                            console.log(post['data']['url']);
                        }}>
                            <div className="post-interactions  col-3 ">
                                <div className="post-upvote d-flex col-12">
                                    <div className="upvote-icon">
                                        <img className='post-icon' src="icons8-up-48.png" alt="" />
                                        {/* <p className='post-text'>{post['data']['ups']}</p> */}
                                    </div>
                                    <div className="upvote-number">
                                        <p className='post-text'>{post['data']['ups']}</p>
                                    </div>
                                </div>
                                <div className="post-downvote d-flex col-12 ">
                                    <div className="downvote-icon">
                                        <img className='post-icon' src="icons8-down-48.png" alt="" />
                                        {/* <p className='post-text'>{post['data']['downs']}</p> */}
                                    </div>
                                    <div className="downvote-number">
                                        <p className='post-text'>{post['data']['downs']}</p>
                                    </div>
                                </div>
                                <div className="post-comment d-flex col-12">
                                    <div className="comment-icon">
                                        <img className='post-icon' src="icons8-comments-48.png" alt="" />
                                        {/* <p className='post-text'>{post['data']['num_comments']}</p> */}
                                    </div>
                                    <div className="comment-number">
                                        <p className='post-text'>{post['data']['num_comments']}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="post-title col-9">
                                <div className="post-title ">
                                    <p className='post-title-text'>{post['data']['title']}</p>
                                    {/* <p className='post-text'>Posted By {post['data']['author']}</p> */}
                                </div>
                                <div className="post-author ">
                                    <p className='post-text'>Posted By {post['data']['author']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        })
    }
    </div>
   )
}