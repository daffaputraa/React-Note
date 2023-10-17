import React from 'react'


const Card = ({isPacked}) => {
    if(isPacked){
      return <h1>This is True!</h1> //akan mengembalikan nilai ini jika propsnya true
    }
    return <h1>This is False!</h1> // akan mengembalikan nilai ini jika propsnya false
  }

const Conditional = () => {
  return (
    <>
      <Card isPacked={false}/>
      <Card isPacked={true}/>
      <Card isPacked={true}/>
    </>
  )
}

export default Conditional