import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { API } from '../App';
import { useNavigate,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {
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
    let {id}=useParams()
  
  const handleEdit=async()=>{
    try{
       let data={name,username,email,phone,country,state,city,pin,website,status:false}
       let res=await axios.put(`${API}/${id}`,data)
       if(res.status===200){
            Navigate("/")
            toast.success("Edited")
       }
    }
    catch(error){
        toast.error("Internal Error")
    }
  }
  
  const getUserData=async()=>{
    try {
      let res=await axios.get(`${API}/${id}`)
      if(res.status===200){
        setName(res.data.name)
        setEmail(res.data.email)
        setUsername(res.data.username)
        setWebsite(res.data.website)
        setCoutry(res.data.country)
        setPhone(res.data.phone)
        setState(res.data.state)
        setCity(res.data.city)
        setPin(res.data.pin)
      }
    } catch (error) {
      toast.error("Internal Error")
    }
  }
  
  
  
  useEffect(()=>{
    getUserData()
  },[])
  
    return <div className="container-fluid ">
      <h1>Edit the Element:{id} </h1>
      <div  >
      <Form className="form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Set UserName</Form.Label>
          <Form.Control type="text" placeholder="UserName" value={username} onChange={(e)=>setUsername(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="text" placeholder="Phone no" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>website</Form.Label>
        <Form.Control type="text" placeholder="Website link" value={website} onChange={(e)=>setWebsite(e.target.value)} />
      </Form.Group>
        {/* address */}
        <Form.Label className="fw-bold">Address</Form.Label>
           <Form.Group >
           <Form.Control type="text" placeholder='Country' value={country} onChange={(e)=>setCoutry(e.target.value)}  />
           </Form.Group>
           <br />
              <Form.Group>
                 <Form.Control type="text" placeholder='State' value={state} onChange={(e)=>setState(e.target.value)} />
              </Form.Group>
              <br />
              <Form.Group >
                 <Form.Control type="text" placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)}  />
              </Form.Group>
              <br />
              <Form.Group >
                 <Form.Control type="text" placeholder='Pincode' value={pin} onChange={(e)=>setPin(e.target.value)} />
              </Form.Group>
              <br />
              <Button variant="primary" onClick={()=>handleEdit()}>Edit</Button>
      </Form>
      </div>
      
  
    </div>
}

export default Edit
