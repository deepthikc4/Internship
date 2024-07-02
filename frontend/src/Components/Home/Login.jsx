import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
        <div className="imagecontainer ">
        <h3 className='text-center text-light p-6' style={{paddingTop:"300px",fontSize:"40px"}}>Login Page</h3>

        </div>

<form className=' login '>

  <div class="form-group ">
   <i class="fa fa-envelope icon emailicon"></i>
<input type="email" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  
  </div>
  <div class="form-group">
  <i class="fa fa-lock icon passwordicon"></i>
    <input type="password" class="form-control input" id="exampleInputPassword1" placeholder="Password"/>
  </div> 
 
  <button type="submit" class="btn  text-light buttons">Submit</button>
  {/* <button type="submit" class="btn  text-danger mt-3 mx-auto d-block">Don't have account? Sign Up Now </button> */}

</form>


    </div>
  )
}

export default Login