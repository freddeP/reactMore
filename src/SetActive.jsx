import React from 'react'
import { useContext } from 'react'
import SetContext from './SetContext'

export default function SetActive() {

    const dispatch = useContext(SetContext);

  return (
    <div>

        <button onClick ={()=>{dispatch({type:"inc"})}}>+ 1</button>
        <button onClick ={()=>{dispatch({type:"not"})}}>toggle active</button>

    </div>
  )
}
