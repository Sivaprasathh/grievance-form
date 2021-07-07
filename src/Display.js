import React from 'react';
import './App.css';
class Display extends React.Component{
   
 
    render(){
        const {user} = this.props
        const {setStatusResolved} = this.props;
        const {setStatusRejected} = this.props;
        return(
            <>
            {user.map((u,index)=>{
                 {return u[3] === "null" ? <div className= "default">Email:{u[0]} <br />Title:{u[1]} <br /> Desc:{u[2]} {<div className = "btn1"><button   style={{color: "green"}}  onClick = {()=> {setStatusResolved(index)}}>Resolve</button> <button   style={{color: "red"}} onClick = {()=> {setStatusRejected(index)}} >Reject</button></div>} </div>: 
                <div className= "submit">Email:{u[0]} <br /> Title:{u[1]} <br/> Description:{u[2]} <br/> 
                {u[3] === "Resolved"? <span  style={{color: "green"}} >{u[3]}</span>
            :    <span  style={{color: "red"}} >{u[3]}</span>
            }
                
                </div>
                 
                }
            })}
            </>
        )
    }
}
export default Display;