import React from 'react'
import { useParams } from 'react-router-dom'


const Edit = () => {
    const {id} = useParams()
  return (
    <>
    <input type="text" />
    </>
  )
}

export default Edit