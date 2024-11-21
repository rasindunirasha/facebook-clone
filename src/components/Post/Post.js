import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
           <img src="/images/6.jpg" alt="" className="postPic" />
           <span className="postUsername">Rasindu Nirasha</span>
           <span className="postTime">5 mins ago</span>
        </div>

        <div className="postCenter">
         <div className="postCaption">
          I'm not Perfect
         </div>
         <img src="/images/10.jpg" alt="" className="postedPic" />

        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/images/like1.png" alt="" className="likePic" />
            <img src="/images/heart.png" alt="" className="heartPic" />
            <img src="/images/haha.jfif" alt="" className="hahaPic" />
            <span className="postLikeCount">Rasindu Nirasha and 20 others</span>
            </div>

           <div className="postBottomRight">
              <span className="postCommentCount">15 comments</span>
            
            </div> 
        </div>
      </div>
    </div>
  )
}
