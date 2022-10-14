import React,{useContext} from 'react'
import StateContext from './StateContext'


export default function Active() {

const state = useContext(StateContext);
    console.log(state);
  return (
    <div>      
        {state.active ? <h2>{state.count}</h2> : <h2>No Counts..</h2> }
        <hr />
     
    </div>
  )
}
