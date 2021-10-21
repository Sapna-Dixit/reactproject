import React from 'react'

const Empdata = ({ employee }) =>{
    let currDate = new Date();
    let newDate = currDate.getDate();
    let newDate1 = newDate < 10 ?`0${newDate}` : `${newDate}`

    let month = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
        
    ];

    let currMonth = month[currDate.getMonth()];
    let actualDate = `${newDate1} ${currMonth}`
    return  employee.map(({id, name, dob, age, gender, image})=>{
        let empDOB = dob;
        if(empDOB === actualDate)
        {
            return(
                <div key = {id} className ="person">
                    <img src ={image} alt ="/"/>
                    <div className="emp_details">
                        <h4>{ name }</h4>
                        <p>Gender : {gender}</p>
                        <p>Dob : {dob}</p>
                        <p>Age : {age}</p>
                    </div>
                </div>
            )
        }
        else
        {
            return null;
        }

    })
};

export default Empdata;