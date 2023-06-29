import { useEffect,useState } from "react"


export const DebugInfinite = () => {

    const [value, setValue] = useState('')
    const [count, setCount] = useState(-1)

    useEffect(() => setCount(count + 1));
    const onChange = event =>{
        setValue(event.target.value)
    }

  return (
    <div>
        <input type="text" value ={value} onChange={onChange}/>
        <div>Number of changes: {count}</div>
    </div>
  )
}
