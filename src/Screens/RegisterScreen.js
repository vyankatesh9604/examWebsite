import React, { useState } from 'react'  
import './register.css'
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios'

export default function RegisterScreen() {
    const history =useHistory()
    const [name,setName]= useState('')
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')
    const [OrganizationName,setOrganizationName]=useState('')

    const  getregister = (e)=>{
        e.preventDefault()
		axios.post('/faculty/signup',{name:name,email:email,password:password,organizationName:OrganizationName})
			.then((res)=>{
				if(res.data.status==="fail"){
					alert(res.data.message)
				}else{
                    alert("Register Sucessfully")
					history.push('/home')
				}
			}).catch((err)=> {
				console.log(err)
			})
    }
    return (
        <section className="container-fluid">
				<section className ="row justify-content-center">
					<section className="col-12 col-sm-6 col-md-3">
	            		<form className="form-container" onSubmit={(e) => getregister(e)}>
	            			<h2>REGISTER</h2>
                            <div className="form-group">
								<input type="text" className="form-control" id="exampleInputName1" placeholder="Enter name" required=" "
								value={name} onChange={(e)=>setName(e.target.value)}/>
								
							</div>
							<div className="form-group">	
								<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" 
								 value={email} required=" "   onChange={(e)=>setEmail(e.target.value)}/>
								
							</div>
							<div className="form-group">
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"
								  required=" " value={password} onChange={(e)=>setPassword(e.target.value)}/>
							</div>
                            <div className="form-group">
								<input type="text" className="form-control" id="exampleInputOn1" placeholder="Enter organization Name"
								  required=" " value={OrganizationName} onChange={(e)=>setOrganizationName(e.target.value)}/>
							</div>
							<button className="btn btn-primary btn-block" type='submit'>Register</button>
                            <label>Already Have Account</label>
                            <Link to="/" style={{color:'blue',marginTop:20,marginLeft:10}}>Login</Link>                   
						</form>
					</section>
				</section>
			</section>
    )
}
