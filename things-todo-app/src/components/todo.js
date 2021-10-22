import React, { useState }  from 'react'
import { useSelector,  useDispatch }  from 'react-redux';
import { addTodo, deleteTodo,removeAll } from '../actions';
import todoReducer from '../reducers/todoReducer';
//import './todo.css'

const Todo = ()=>{
    const[inputData, setInputData] = useState('');

    const list = useSelector((state)=> state.todoReducer.list)

    const dispatch = useDispatch(); 

   


    return(
        <>
           <div className="main-div">
                <div className = "child-div">
                   
                    
                        <h1 style={{textAlign:"center"}}>THINGS TO DO</h1>
                   
              
                        <div className = "form-group addItems">

                        <input  type = "text" 
                        className ="form-control"
                        size = "35"
                        placeholder = " Add New " value = {inputData}
                        onChange = {(event)=>setInputData(event.target.value)}/>
                </div>
                
                <div className="showItems">
                
                    {
                     
                        list.sort((a,b)=>a.id < b.id ? 1:-1).map((elem)=>{
                            return(
                                
                                <div className="eachItem" key = {elem.id} 
                                style = {{display:'flex', borderBottom :"1px solid lightgrey", paddingBottom:"8px"}}>
                                   
                                   
                                    <input  type = "checkbox"  className="form-check-input" id="checkbox" />
                                    <label for="checkbox" className="form-check-label" > &nbsp;&nbsp;{elem.data}</label>
                                    
                                {/* <h3>&nbsp;&nbsp; &nbsp;{elem.data}</h3>
                                    <div className="todo-btn">
                                        <i  className = "fa fa-trash-alt add-btn" 
                                        onClick = {()=> dispatch(deleteTodo(elem.id),setInputData(''))}></i>
                                    </div> 
                                  */}
                                
                                </div>
                            
                            )
                            
                        } )
                    }
                 
                </div>
               
            <div className="footer" style={{borderTop : "1px solid whitesmoke"}}>
                <i className = "fa fa-plus add-btn" 
                    onClick = {()=> dispatch(addTodo(inputData),setInputData(''))}></i>
                     &nbsp;&nbsp; &nbsp;
                <i className = "fa fa-search add-btn" ></i> 
                <i className = "clr-btn" 
                    onClick = {()=> dispatch(removeAll())}>ClearAll</i>
             </div>  
       
      </div>

    </div>  
    </>
    )
}

export default Todo;