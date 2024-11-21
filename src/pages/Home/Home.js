import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import LeftPane from '../../components/LeftPane/LeftPane'
import PostPane from '../../components/PostPane/PostPane'
import RightPane from '../../components/RightPane/RightPane'
import "./Home.css"

export default function Home() {
  return (
    <div>
      <Navbar/>
     <div className="bottomContainer">
      <LeftPane/>
      <PostPane/>
      <RightPane/>
     </div>

    </div>
  )
}
