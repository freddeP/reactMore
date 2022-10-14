import React from 'react'
import StateContext from './StateContext'
import SetContext from './SetContext'
import { useContext } from 'react'

export default function Names() {

    const state = useContext(StateContext);
    const dispatch = useContext(SetContext);

    function deleteName(e){

        dispatch({type:"deleteName", value:e.target.id})

    }


  return (
    <div>        
        <h3>{state.names.map(n=> (<p key={n.id}>
            {n.name}
            <button id={n.id} onClick={deleteName}>Delete</button>
        
    
        </p>))}</h3>
    </div>
  )
}
