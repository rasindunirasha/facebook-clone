
import React from 'react'
import './addPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className="addPost">

    <div className='addpostContainer'>

        <div className="addPostTop">

         <img src="/images/6.jpg" alt="" className="profilePic2" />
         <input placeholder= "What's on your mind...?" className="addPostInput"/>

        </div>
        <hr className='addPostHr'/>

        <div className="addPostBottom">
            <div className="addPostOptions">

             <div className="addPostOption">
                <InsertPhotoIcon htmlColor='orange' className='addPhoto'  />
                <span className="addPostOptionText">Photo/video</span>
             </div> 

             <div className="addPostOption">
                <LocationOnIcon htmlColor='red' className='addLocation'  />
                <span className="addPostOptionText">Location</span>
             </div> 

             <div className="addPostOption">
                <LocalOfferIcon htmlColor='blue' className='addTag'  />
                <span className="addPostOptionText">Tag People</span>
             </div> 

             <div className="addPostOption">
                <LiveTvIcon htmlColor='tomato' className='addLive'  />
                <span className="addPostOptionText">Live</span>
             </div> 

             <button className="postButton">Post</button>
            </div>
            


        </div>
         
       
     </div>
    </div>
  )
}
