import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { buyBook } from '../redux';


const HookBookContainer = ()=>{
    const numberOfBooks = useSelector(state=> state.numOfBooks);
    const dispatch =  useDispatch();


    return(
        <div>
            <h1>HookBookContainer</h1>
            <h2>Hooks Number of Books={numberOfBooks}</h2>
            <button onClick = {()=>dispatch(buyBook())}>BuyBook</button>
        </div>
    )
}

export default HookBookContainer;