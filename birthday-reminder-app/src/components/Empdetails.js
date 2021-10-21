import React from 'react'
import data from '../components/data.js'
import { Link } from 'react-router-dom'
import Empdata from './Empdata.js';
import EmpdataAll from './EmpdataAll.js';

const Empdetails = ()=>{
    return(
        <div className="container">
            <h3>Employee Birthday Details</h3>
            <EmpdataAll employee = { data }/>
            <Link to = "/empdetails">Employee Details</Link>
        </div>
    )
};
export default Empdetails;
