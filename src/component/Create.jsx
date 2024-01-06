import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { API } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Create() {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [phone,setPhone]=useState("")
  let [username,setUsername]=useState("")
  let [website,setWebsite]=useState("")
  let [country,setCoutry]=useState("")
  let [state,setState]=useState("")
  let[city,setCity]=useState("")
  let[pin,setPin]=useState("")

  let Navigate=useNavigate()

const handleCreate=async()=>{
  try{
     let data={name,username,email,phone,country,state,city,pin,website,status:false}
     let res=await axios.post(API,data)
     if(res.status===201){
          Navigate("/")
          toast.success("Created successfully")
     }
  }
  catch(error){
         toast.error("Internal Error")
  }
}

  return <div className="container-fluid ">
    <h1>Create</h1>
    
    <Form className='form'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Set UserName</Form.Label>
        <Form.Control type="text" placeholder="UserName" onChange={(e)=>setUsername(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="text" placeholder="Phone no" onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>website</Form.Label>
        <Form.Control type="text" placeholder="Website link" onChange={(e)=>setWebsite(e.target.value)} />
      </Form.Group>
      {/* address */}
      <Form.Label className="fw-bold">Address</Form.Label>
         <Form.Group >
         <Form.Control type="text" placeholder='Country' onChange={(e)=>setCoutry(e.target.value)}  />
         </Form.Group>
         <br />
            <Form.Group>
               <Form.Control type="text" placeholder='State' onChange={(e)=>setState(e.target.value)} />
            </Form.Group>
            <br />
            <Form.Group >
               <Form.Control type="text" placeholder='city' onChange={(e)=>setCity(e.target.value)}  />
            </Form.Group>
            <br />
            <Form.Group >
               <Form.Control type="text" placeholder='Pincode' onChange={(e)=>setPin(e.target.value)} />
            </Form.Group>
            <br />
            <Button variant="primary" onClick={()=>handleCreate()}>Submit</Button>
    </Form>

    

  </div>
}

export default Create
