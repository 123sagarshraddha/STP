import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Login = (props) => {
    const [user, setUser] = useState({
        email: "", psw: ""
    });
    const [disable, setDisable] = useState(true)

    let name, value;
    const handleInputs = (e) => {
        console.log(e.target.value);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [e.target.name]: value })
    }
    useEffect(() => {
        if (user.email !== "" && user.psw !== "") {
            setDisable(false)
        }
    }, [user])

const loginButton = () =>{
   props.setIslogin("true")
}


 
    return (
        <div className='login'>
            {console.log('hhhh', user)}
             <div className='header-h2'>
                <h2>Login</h2>
            </div> 
           
            <form className='login_form'>
                <div className="login_main">
                    <label><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" value={user.email} onChange={handleInputs} name="email" required />

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" value={user.psw} onChange={handleInputs} name="psw" required />

                    <button type="submit" disabled={disable} onClick={loginButton} >Login</button>
                    <input type="checkbox" /> Remember me
                </div>

                <div className="login_main" >
                    <button type="button" className="cancelbtn" >Cancel</button>
                    <span className="forgot_psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    )
}

export default Login;











// import React, { useState } from "react";
// import "./Form.css";
// function Form(){
//     const [firstName,setFirstName]=useState('')
//     const [lastName,setLastName]=useState('')
//     const [error,setError]=useState(false)

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(firstName.length==0||lastName.length==0){
//             setError(true)
//         }
//         if(firstName&&lastName)
//         {
//         console.log("First Name: ",firstName,"\nLast Name: ",lastName)
//         }
//     }
//     return(
//         <>
//            <form onSubmit={handleSubmit}>
//                <div>
//                    <input placeholder="First Name" onChange={e=>setFirstName(e.target.value)} />
//                </div>
//                {error&&firstName.length<=0?
//                <label>First Name can't be Empty</label>:""}
//                <div>
//                    <input placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
//                </div>
//                {error&&lastName.length<=0?
//                <label>Last Name can't be Empty</label>:""}
//                <div>
//                    <button>
//                        Submit
//                    </button>
//                </div>
//            </form>
//         </>
//     );
// }
// export default Form;