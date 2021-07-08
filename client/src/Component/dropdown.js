import { useState } from "react"
import { Button } from '@material-ui/core'

export default function Dropdown(props){
    let [ count, setCount ] = useState(0)
    return(
        <div style={{background: 'white', width:'200px', height: '200px', marginTop: '25px', color:'black'}}>
            <p>{props.test}</p>
            <p>{props.age}</p>
            <Button variant='filled' onClick={()=>{setCount(count+1)}}>{count}</Button>
        </div>
    )
}