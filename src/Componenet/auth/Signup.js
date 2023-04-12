
import React, { useEffect, useState } from 'react';



const Signup = () => {

    const [user, setUser] = useState({
        fname: "", lname: "", email: "", psw: "", repeatpsw: ""
    });
    const [disable, setDisable] = useState(true)

    let name, value;
    const handleInputs = (e) => {
        console.log(e.target.value);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [e.target.name]: value })
    }
    useEffect(()=>{
        if(user.fname !== "" && user.lname !== "" && user.email !=="" && user.psw !=="" && user.repeatpsw !==""){
            setDisable(false)
        }
    },[user])
    
    return (
        <div>
            {console.log('hhhh', user)}
            <h2 className='signup_h2'>SIGN UP</h2>
                <form className='form'>
                
                    <label htmlFor="fname"><b>First Name</b></label>
                    <input type="text" name="fname" value={user.fname} onChange={handleInputs} placeholder="Enter First Name" required />

                    <label htmlFor="lname"><b>Last Name</b></label>
                    <input type="text" name="lname" value={user.lname} onChange={handleInputs} placeholder="Enter Last Name" required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" name="email" value={user.email} onChange={handleInputs} placeholder="Enter Email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" name="psw" value={user.psw} onChange={handleInputs} placeholder="Enter Password" required />

                    <label htmlFor="repeatpsw"><b>Repeat Password</b></label>
                    <input type="password" name="repeatpsw" value={user.repeatpsw} onChange={handleInputs} placeholder="Repeat Password" required />

                    <label>
                        <input type="checkbox" name="remember" /> By creating an account you agree to our <a href="#" >Terms & Privacy</a>
                    </label>
                    <div  >
                        <button type="submit"  className="signupbtn" disabled={disable}>Sign Up</button>
                    </div>
                
            </form>
            </div>
       
    )
}

export default Signup;