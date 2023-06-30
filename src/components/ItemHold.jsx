
import { useState } from "react"
import Item from './Item'
const ItemHold=()=>{
    const [buttonChild, setButtonChildren] = useState([1,2,3])
  
  function removeButton(removeId){
    setButtonChildren(buttonChild.filter((id)=> id!== removeId))
  }
  
    return (
      <div>
        <h1> have fun</h1>
        {buttonChild.map((id)=>(
          <Item key={id} id={id} remove={removeButton} />
        ))}
      </div>
    )
}
export default ItemHold