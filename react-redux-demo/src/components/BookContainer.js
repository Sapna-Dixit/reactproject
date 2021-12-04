import React from 'react';
import { buyBook } from '../redux';
import  {connect } from "react-redux";

const bookContainer = (props)=>{
    return(
        <div>
            <h1>Number  of Books-{props.numOfBooks}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
        </div>
    )
}

const  mapStateToProps=(state)=>{
    return{
        numOfBooks:state.numOfBooks,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        buyBook:function()
        {
            dispatch(buyBook());
        }
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(bookContainer);