import React from 'react'
import {Line} from 'react-chartjs-2'
import{
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale, 
  PointElement,
  Tooltip,
)

const Graph = () => {
  const data ={
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets:[
      {
      labels: 'datesets1',
      data:[1, 2, 1.5, 2.2, 3, 3.3, 2],
      backgroundColor: 'gray',
      borderColor:'skyblue',
      pointBorderColor:'skyblue',
      fill: true,
      tension: 0.4
    },
    {
      labels: 'datesets2',
      data:[2, 1, 2.5, 1.2, 1, 1.1, 1],
      backgroundColor: 'gray',
      borderColor:'purple',
      pointBorderColor:'purple',
      fill: true,
      tension: 0.4
    }
  ]
  }

  const options ={
    Plugins:{
      legend: true
    },
    scales:{
      y:{
        min: 0,
        max: 5
      },
      x:{
        min: 0,
        max: 7
      }
    }
  }
  return (
    <div className='graph'>
      <div>
        <div className='productivity'>
          <span style={{fontSize:'15px', fontWeight:'bolder', marginLeft:'15px', position:'relative', top:'-10px'}}> Productivity</span>
          <div style={{display:'flex',marginLeft:'14px', flexDirection:'row', marginTop:'-13px'}}>
            <div>
            <div style={{width:'10px', height:'10px', borderRadius:'100px', background:'purple', fontSize:'10px'}}/> 
            <label style={{fontSize:'10px', fontWeight:'bolder', position:'relative', top:'-40px', left:'13px'}}>Research</label>
            </div>
            <div style={{marginLeft:'20px'}}>
            <div style={{width:'10px', height:'10px', borderRadius:'100px', background:'skyblue', fontSize:'10px'}}/> 
            <label style={{fontSize:'10px',fontWeight:'bolder', position:'relative', top:'-40px', left:'13px'}}>Design</label>
            </div>
           
          </div>
          <div className='dropdown' style={{marginTop:'-100px', float:'right'}}>
            <div style={{marginLeft:'30px'}}>
              <select style={{width:'100px',outline:'none', height:'15px',fontSize:'10px', border:'1px', backgroundColor:'#b5c2c9', borderRadius:'20px'}}>
                <option value="">01-07 may</option>
                <option value="">02-07 may</option>
                <option value="">03-07 may</option>
                <option value="">04-07 may</option>
                <option value="">05-07 may</option>
                <option value="">06-07 may</option>
              </select>
            </div>
            <span style={{fontSize:'10px', fontWeight:'bolder', position:'relative',top:'-30px', right:'10px'}}>Date update every three hours </span>

          </div>
         
        </div>

      </div>
     

    <div
    style={{
      width:'350px',
      height:'800px',
      position:'relative',
      marginLeft: '13px',
      top:'-35px'
    }}
    >
    <Line
      data={data}
      options={options}
      >


      </Line>
    </div>
     
     
    </div>
  )
}

export default Graph

