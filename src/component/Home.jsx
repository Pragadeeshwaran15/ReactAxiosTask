import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { API } from '../App';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Home() {
  let [info,setInfo]=useState([])

//delete function
const handleDelete=async(id)=>{
 try{ 
  let result=await axios.delete(`${API}/${id}`)
  getInfo()
  toast.success("Deleted Successfully!")
}
catch(error){
 toast.error("Try Again")
}
}
//editin page navigation
let Navigate=useNavigate()

//  function to get the api data by axios
  const getInfo=async()=>{
         let result= await axios.get(API)
         try{

          if(result.status===200){
            setInfo(result.data)
          }
          toast.success("Data Fetched")
         }
         catch(error){
            toast.error("Internal server Error!!")
         }

  }
  // call the function at initial rendering
  useEffect(()=>{
    getInfo()
  },[])
  return <div className="container-fulid">
    <TopBar/>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>userName</th>
          <th>Address</th>
          <th>phone</th>
          <th>website</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          info.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.username}</td>
              <td>{e.country},{e.state},{e.city},{e.pin}</td>
              <td>{e.phone}</td>
              <td>{e.website}</td>
              <td className='d-flex gap-1'>
              <Button variant="primary" onClick={()=>Navigate(`/edit/${e.id}`)}>Edit</Button>
              <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
    
  </div>
}

export default Home
