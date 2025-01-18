import { useState } from 'react'
import './App.css'
import Input from "./Input"
import Tabel from './Tabel';
function App() {

const [userData, setuserData] = useState({
  username : "",
  useremail : "",
  password : ""

})
const [data, setdata] = useState([])
  const handelSubmit = ()=>{
    setdata((pre)=>{
      return [...pre,userData]
    })
    setuserData({
      username : "",
      useremail : "",
      password : ""
    })
    console.log(data)
  }








  return (
    <>
<Input label = "Name" value = {userData.username} type = "text" placeholder = "Enter Name " onChangeFun={(e)=>{setuserData({...userData,username:e.target.value})}} /> <br></br>
<Input label= "Email " value = {userData.useremail} type = "email" placeholder = "Enter Email "  onChangeFun={(e)=>{setuserData({...userData,useremail:e.target.value})}} /><br></br>
<Input  label ="Password" value = {userData.password}type = "password" placeholder = "Password"  onChangeFun={(e)=>{setuserData({...userData,password:e.target.value})}} /><br></br>
<button onClick={handelSubmit}>Submit</button>
<Tabel data = {data}/>
    </>
  )
}

export default App
