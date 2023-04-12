
import React , {useEffect, useState}from 'react';


const Profile =()=>{

    const[user,setUser]=useState({
        fname:"",lname:"",email:"",phnum:""
    });

    const [disable,setDisable]=useState(true)

    let name , value;
    const handaleIputs =(e)=>{
        console.log(e.target.value)
        name=e.target.name;
        value=e.target.value;

        setUser({ ...user, [e.target.name]: value })
    }

    useEffect (()=>{
        if(user.fname!=="" && user.lname!=="" && user.email!=="" && user.phnum!=="" ){
            setDisable(false)
        }
    })
    return(
        <div>
            <h2 className='profile_h2'>Your Profile</h2>
            <form>
                <div className='profile_form'>
                <label htmlFor="fname"><b>First Name</b></label>
                <input type="text" name="fname" value={user.fname} onChange={handaleIputs} placeholder="Enter First Name" required />

                <label htmlFor='lname'><b>Last Name</b></label>
                <input type='text' name='lname' value={user.lname} onChange={handaleIputs} placeholder="Enter Last Name" required/>

                <label htmlFor='email'><b>Email</b></label>
                <input type='text' name='email' value={user.email} onChange={handaleIputs} placeholder='Enter Email' required/>

                <lable className='lable' htmlFor='Phone'><b>Phone Number</b></lable>
                <input type='number' name='phnum' value={user.phnum} onChange={handaleIputs} placeholder='Enter  Phone Number' required/>

                <div>
                        <button type="change" className="changebtn" disabled={disable} >SUBMIT CHANGES</button>
                 </div>

                </div>
            </form>
        </div>
    )
}

export default Profile;
