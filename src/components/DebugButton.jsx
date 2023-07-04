function ItemHold (){
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
  
  
  function Item ({remove, id}){
    return(
      <div>
        <button onClick={()=>remove(id)}>Fix me. id: {id}</button>
      </div>
    )
  }
  