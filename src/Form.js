import React from 'react';
import Display from './Display';
import './App.css';

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            user:[]
        }
    }
    handleInput = (e)=>{
     e.preventDefault();
     console.log("Inside handleInput")
     let arr=[];
     arr[0] = e.target.elements.email.value;
     arr[1] = e.target.elements.title.value;
     arr[2]=  e.target.elements.desc.value;
     arr[3] = "null"
     let fin = [...this.state.user,arr];
     this.setState({
         user:fin
     },()=>{
        console.log(this.state.user);
     })
     
    }
    setStatusResolved = (index)=>{
     
      let arr = [];
      arr=[...this.state.user]
      arr[index][3] = "Resolved";
      let fin = arr;
       
      this.setState({
         user:fin
      },()=>{
          console.log("State:",this.state.user)
      })
      
    }
    setStatusRejected = (index)=>{
     
        let arr = [];
        arr=[...this.state.user]
        arr[index][3] = "Rejected";
        let fin = arr;
         
        this.setState({
           user:fin
        },()=>{
            console.log("State:",this.state.user)
        })
        
      }
    render(){
        return(
            <>
            <h4>Grienvance Form</h4>
            <form onSubmit = {this.handleInput} >
             <label> 
                 <div className = "form">  
             <div> Email:<input type = "email" name = "email"></input></div>
             <div> Title :<input type = "text" name = "title"></input></div>
             <div>  Description :<input type = "text" name = "desc"></input></div>
             <button class = "btn" type = "submit">Submit</button>
             </div>
             </label>
             
            </form>
             <Display user = {this.state.user}  setStatusResolved={this.setStatusResolved}
             setStatusRejected = {this.setStatusRejected}
             />
             </>
        )
    }
}
export default Form;