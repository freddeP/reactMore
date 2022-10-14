import { useContext, useReducer } from 'react'
import './App.css'
import StateContext from './StateContext'
import SetContext from './SetContext'
import Active from './Active'
import SetActive from './SetActive'
import CreateName from './CreateName'
import Names from './Names'


function reducer(state, action) {
  
  if(action.type == "not")
    return {...state, active:!state.active}
  if(action.type =="inc")
    return {...state, count:state.count+1}
  if(action.type =="createName")
    return {...state , names: [action.value, ...state.names]}
  if(action.type =="deleteName")
    return {...state, names:state.names.filter(n=>n.id!=action.value)}

}

const initState = {
  names:[
    {id:3,name:"Lenny"},
    {id:34,name:"Lars"},
    {id:37,name:"Jenny"}
  ],
  isActive:false,
  count:0,
  active:false
}

function App() {

  const [state, dispatch] = useReducer(reducer, initState);
  

  return (
    <SetContext.Provider value={dispatch}>
      <StateContext.Provider value ={state}>
      <div>
       <h1>App</h1>

      <Active />
      <SetActive></SetActive>
      <hr />
      <CreateName></CreateName>
      <Names></Names>

      </div>
      </StateContext.Provider>
    </SetContext.Provider>
  )
}

export default App
