import React from 'react'
import Empdata from './c'
const Empdetails = ()=>{
    return(
        <div className="container">
            <h3>Today Birthday</h3>
            <Empdata employee = { data }/>
            <Link to = "/empdetails">Employee  Details</Link>
        </div>
    )
};
export default Empdetails;
