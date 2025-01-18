import React from 'react'

const Tabel = ({data}) => {
  console.log(data)
  return (
    <div>
<table border={2}>
  <tr>
    <th>name</th>
    <th>email</th>
    <th>password</th>
  </tr>
{
  data.map((e,i)=>{
    return(
      <tr key={i}>
        <td>{e.username}</td>
        <td>{e.useremail}</td>
        <td>{e.password}</td>
      </tr>
    )
  })
}
</table>




    </div>
  )
}

export default Tabel