import React from 'react'
import '../../../../styles/corouselslider.css'
import { BiCommentDetail } from 'react-icons/bi'
import { MdDriveFileMoveRtl } from 'react-icons/md'

const SecondCarouselSlider = () => {
  return (
    <div>
        <div className='first-card'>
                <p className='feedback' >Feedback</p>
                <p className='blog' >blog</p>
                <p className='design-system' >Design System</p>
                <span className='improve-cardR'>Improve card readability</span>
                <span className='date'>21:03:22</span>
            <div className='images-section'>
                <div className='images'style={{ display:'flex', flexDirection:'row'}}>
                    <img src="./red car.jpg" alt="" style={{width:'25px', position:'relative', left:'-200px', top:'27px', borderRadius:'15px', height:'30px'}}/>
                    <img src="./benz.jpeg" alt=""  style={{width:'25px',position:'relative', left:'-200px', top:'31px', borderRadius:'15px', height:'25px'}} />
                    <img src="./black car.jpg" alt="" style={{width:'25px',position:'relative', left:'-200px', top:'30px', borderRadius:'15px', height:'25px'}}  />
                </div>
                <div className='comment-file'>
                    <div className='comments'>
                        <BiCommentDetail/>
                        <span className='comments-style'>12 comments</span>
                    </div>
                    <div className='files'>
                        <MdDriveFileMoveRtl/>
                        <span className='file-style'>0 files</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondCarouselSlider