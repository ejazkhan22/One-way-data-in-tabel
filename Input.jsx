import React from 'react'

const Input = ({type,placeholder,onChangeFun,label , value }) => {
  return (
    <>
<input value={value} label={label} type={type} placeholder={placeholder} onChange={onChangeFun}/>
    </>

  )
}

export default Input