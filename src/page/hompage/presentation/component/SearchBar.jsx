import React, { useEffect, useState } from 'react'
import '../../../../styles/searchbar.css'
import '../../../../styles/taskbar.css'
import '../../../../styles/togglebutton.css'
import { Col, Container} from 'react-bootstrap'
import {CiSearch, CiClock2} from 'react-icons/ci'
import{AiOutlineUnorderedList} from 'react-icons/ai'
import{BiBookOpen} from 'react-icons/bi'
import{IoMdDoneAll} from 'react-icons/io'


const SearchBar = () => {
  //useState use for maping the data from the Api
    const[ info, setInfo]= useState([])
  // used for the search function
    const[search, setSearch]=useState('')
  
    // function use to search through the table
    const handleSearch= (event)=>{
        setSearch(event.target.value)
    }
// the use effect was used to fetch data from an API
//any of the two method is sultable for fetchin data
     useEffect(()=>{
        //  fetch('https://api.escuelajs.co/api/v1/users')
        //  .then(response => response.json())
        //  .then(data => setInfo([...data]))
        const getData = async()=>{
            const reqData = await fetch('https://fakestoreapi.com/products')
            const resData = await reqData.json()
            setInfo(resData)
        }
        getData()
     },[])
      
     // function for the checkbox which one can either select all or select one
     const handleCheckBox =(e)=>{
      const{name, checked} = e.target;
      if (name ==="selectAll") {
        const checkedvalue = info.map((user)=>{
          return{...user, isChecked:checked}
        })
        setInfo(checkedvalue)
      } else {
          const checkedvalue = info.map((user)=>
          user.title === name? {...user, isChecked:checked}: user)
          setInfo(checkedvalue)
      }
      }

    
     
  return (
    <div>
      <div className='searchbar'>
        <Container>
          <Col md={12}>
          <div className='search'>
            <div className='search_div'>
               <input type="text" onChange={handleSearch} placeholder=' Search' className='search_bar' />
                <CiSearch style={{width:'20px', height:'20px', marginTop:'-42px', marginLeft:'270px'}}/>
              </div>
              <div className='searchbar_dropdown'>
              <select className="dropdown-option">
               <option value="">Monday, 6th March</option>
               <option value="">Monday, 7th March</option>
                <option value="">Monday, 8th March</option>
               <option value="">Monday, 9th March</option>
               <option value="">Monday, 10th March</option>
               <option value="">Monday, 11th March</option>
               <option value="">Monday, 12th March</option>
               <option value="">Monday, 13th March</option>
               <option value="">Monday, 14th March</option>
               <option value="">Monday, 15th March</option>
               <option value="">Monday, 16th March</option>
               </select>
               </div>
              
            <span className='switch'>
              <BiBookOpen style={{position:"absolute",zIndex:'2',left:"12px", marginTop:'9px', width:'25px', height:'20px',color:"#b5c2c9"}}/>
              <input type='checkbox' id='switcher'/>
              <label For="switcher"></label>
              <AiOutlineUnorderedList style={{position:"absolute",zIndex:'2', float:'right', right:"70px", marginTop:'-40px', width:'25px', height:'20px',color:"black"}}/>
            </span>

          </div> 
          </Col>
  

        </Container>
  
       
        <Container className='task_div' style={{width:'50rem'}}> 
          <Col md={12}>
                            <div className='task'>
                               <div className='last-task'>
                                   <h1>Last tasks</h1>
                                   <p><strong>117 total,</strong> proceed to resolve them</p>
                               </div>
                               <div className='Count'>
                                   <div className='count-down'>
                                       <h1>91</h1>
                                       <p>Done</p>
                                   </div>
                                   <div className='count-progress'>
                                       <h1>23</h1>
                                       <p>In progress</p>
                                   </div>

                               </div>

                           </div>

                       
                       <hr/>
                   </Col>
                  
           
           
          
             
              <div className='details'>
                       <Col md={3}>
                           <div className='detail'>
                               <input type="checkbox" id="" checked={!info.some((user)=>user?.isChecked!==true)} name= 'selectAll' onChange={handleCheckBox} />
                               <label>Name</label>
                           </div>
                       </Col>
                       <Col md={2}>
                           <label>Admin</label>
                       </Col>
                       <Col md={2}>                           
                       <label>Members</label>
                       </Col>
                       <Col md={2}>
                           <label>Status</label>
                       </Col>
                       <Col md={2}>
                           <label>Run Time</label>
                       </Col>
                       <Col md={2}>                           
                       <label>Finish Time</label>
                       </Col>
                 
                       <hr className='hr1'/>
              </div>
              
                      

              
              <Container className='task_bar' style={{width:'50rem',height:'30vh', border:'1px', backgroundColor:'white', borderRadius:'10px', marginLeft:'-12px', marginTop:'10px', overflowY:'scroll', overflowX:'hidden' }}>
                       
                        { 
                        info.filter((data)=>{
                          if(search === ''){
                            return data
                          }else if(data.title.toLowerCase().includes(search.toLowerCase())){
                            return data
                          }
                        }).map((data, index)=>(
                                   <div key={index} style={{display:'flex',  padding:'10px', fontSize:'13px', flexDirection:'row', top:'10px', position:'relative'}}>
                                       <Col md={3}>
                                           <div style={{marginLeft:'10px'}}>
                                           <input type="checkbox" name={data.title} checked={ data?.isChecked || false } onChange={handleCheckBox} />
                                           <label style={{marginLeft:'10px', top:'-3px', position:'relative'}}>{data.category}</label>
                                           </div>
                                       </Col>
                                       <Col md={2}>
                                          <div style={{display:'flex', flexDirection:'row'}}>
                                          <img style={{width:'20px', height:'20px', marginRight:'100px'}} src={data.image} alt=""/>
                                          <label style={{marginLeft:'-80px'}}>{data.title}</label>
                                          </div>
                                       </Col>
                                       <Col md={2}>
                                          <div style={{marginLeft:'15px'}}>
                                          <span>{Math.floor(Math.random() * 10)}</span>
                                          </div>
                                       </Col>
                                       <Col md={2}>
                                          <div key={index}>
                                          <span>
                                            {data.id%2 !==0? 
                                            <span className='status-progress'>
                                              <CiClock2 style={{ position:'relative', left:'-15px'}}/>
                                              progress
                                              </span> : 
                                              <span className='status-done'>
                                                <IoMdDoneAll style={{ position:'relative', color:'green', left:'-15px'}}/>
                                                done
                                                </span> } 
                                                </span>
                                          </div>
            
                                       </Col>
                                       <Col md={2}>
                                          <div style={{marginLeft:'20px'}}>
                                          <label>{Math.floor(Math.random() * 12)} hours</label>
                                          </div>
                                       </Col>
                                       <Col md={2}>
                                          <div style={{marginLeft:'24px'}}>
                                          <label >{Math.floor(Math.random() * 12)} months</label>
                                          </div>
                                       </Col>
                                   
                                 
                                   </div>
                             ))
                                    
            
                         }
                </Container>
              
            
        </Container>
      </div>
    </div>
  )
}

  export default SearchBar
    