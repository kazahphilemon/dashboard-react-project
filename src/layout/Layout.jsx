import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Col, Container, Row } from 'react-bootstrap';
import {MdDashboard, MdLibraryBooks} from 'react-icons/md'
import {SiProcesswire} from 'react-icons/si'
import {VscTasklist} from 'react-icons/vsc'
import {RiNotification2Line} from 'react-icons/ri'
import {HiOutlineChatBubbleLeftRight} from 'react-icons/hi2'
import {FaCompress} from 'react-icons/fa'
import '../styles/style.css'

const Layout = (props) => {
  return (
    <div className='Container' >
        <Container>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <div className='nav-bar'>
                <div className='site-logo'>
                  <FaCompress className='icons'style={{fontSize:'30px', marginLeft:'80px', marginTop:'25px'}}/> <br />
                  <h1>PHIL</h1>
                </div>
                <hr className='hr' />
                <div className='nav-button'>
                  <ul>
                    <li> 
                      <MdDashboard className='icons'/>
                      <button>Dashboard</button>
                    </li>
                    <li> 
                      <SiProcesswire className='icons'/>
                      <button className='project-btn'>Project</button>
                    </li>
                    <li className='tasklist-btn'>
                      <VscTasklist className='task_list_icon' style={{width:'20px', height:'20px'}}/> 
                      <button style={{marginLeft:'-30px'}}>Task list</button >
                    </li>
                    <li>
                      <MdLibraryBooks className='icons'/>
                       <button className='service-btn'>Services</button>
                      </li>
                    <li>
                      <RiNotification2Line className='icons'/>
                      <div className='Notification'>
                      <button>Notification</button> 
                      <label className='numOfNotification '>2</label>

                      </div>
                      </li>
                    <li> 
                    <HiOutlineChatBubbleLeftRight className='icons'/> 
                      <button className='chat-btn'>Chat</button>
                      </li>
                  </ul>
                </div>
                  <div className='profile'>
                    <div className='profile-pic'> 
                    <img src="./senior staff.jpg" alt=""  />
                    </div>
                    <div className='profile-dot'></div>
                    <h4>Emmaunel  Johnson</h4>
                    <p>johnson@gmail.com</p>
                  </div>
              </div>
            </Col>
          
            
            <Col lg={9} md={9} sm={12}>
                <div>
                  <h1>{props.children}</h1>
                </div>
              </Col>
            </Row>
      </Container>
  </div>
 
  )
}

export default Layout