export default function fetchedSubPosts({fetchResponse}){
   return(
    <div>
    {
        fetchResponse.map((post,index)=>{
            return (<div key={index}>
                    <p>{post['data']['title']}</p>
                    <p>{post['data']['ups']}</p>
                    <p>{post['data']['downs']}</p>
                    <p>{post['data']['num_comments']}</p>
                    </div>)
        })
    }
    </div>
   )
}