import React from 'react'
import { useContext } from 'react';
import SetContext from './SetContext';
export default React.memo(CreateName);
 function CreateName() {

    console.log("Re-rendered");
    const dispatch = useContext(SetContext);
    function saveName(e){
        e.preventDefault();
        
        dispatch({type:"createName",value:{name:e.target.name.value, id:Date.now()}});

    }


  return (
    <div>

        <form onSubmit={saveName}>
            <input type="text" name="name" placeholder='Add Name' />
            <button>Save</button>
        </form>


    </div>
  )
}
