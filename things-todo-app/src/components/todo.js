import React, { useState }  from 'react'
import { useSelector,  useDispatch }  from 'react-redux';
import { addTodo, deleteTodo } from '../actions';
import todoReducer from '../reducers/todoReducer';
import './todo.css'

const Todo = ()=>{
    const[inputData, setInputData] = useState('');
    const list = useSelector((state)=> state.todoReducer.list)
    const dispatch = useDispatch(); 

    return(
        <>
           <div className="main-div">
                <div className = "child-div">
                     <figure>
                        <figcaption>THINGS TO DO</figcaption>
                    </figure>

                <div className = "addItems">
                    <input type = "text" 
                    placeholder = " Add New " value = {inputData}
                    onChange = {(event)=>setInputData(event.target.value)}/>
                    <i className = "fa fa-plus add-btn" 
                    onClick = {()=> dispatch(addTodo(inputData),setInputData(''))}></i>
                

                </div>
    
                <div className="showItems" >
                    {
                        list.map((elem)=>{
                            return(

                                <div className="eachItem" key = {elem.id} style = {{display:'flex'}}>
                                   <h3>{elem.data}</h3>
                                   <div className="todo-btn" style ={{marginLeft:"150px"}}>
                                        <i className = "fa fa-trash-alt add-btn" 
                                        onClick = {()=> dispatch(deleteTodo(inputData),setInputData(''))}></i>
                                    </div>
                                 </div>

                            )
                        })
                    }
                    
                </div>
                
          
      </div>
    </div>  
    </>
    )
}

export default Todo;