import './App.css';
import { useEffect, useState } from 'react'
import DropDown from './Component/dropdown'
import {  useQuery, gql } from '@apollo/client'

const GET_USERS = gql`
  query GetUsers {
    users {
      email
      password
    }
  }
`

function App() {

  const { loading, error, data } = useQuery(GET_USERS);

  let [ name, setName ] = useState({name: 'devon', age: '25'})
  let [ count, setCount ] = useState(0)
  useEffect(()=>{
    let newCount = count + 1
    setCount(newCount)
  },[name.name])

  console.log(data)
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>
  return (
    <div className="App">
      <header className="App-header">
        
        {data.users.map((row)=>{
          return <DropDown test={row.password} age={row.email} />
        })}
        { name.name == 'secret' ? <div>You found a secret</div> : null}
        name: {name.name}
        <br/>
        age: {name.age}
        <br/>
        updated: {count}
        <input onChange={(e)=>{setName({name: e.target.value, age: name.age})}} />
        <input onChange={(e)=>{setName({age: e.target.value, name: name.name})}} />
      </header>
    </div>
  );
}

export default App;
