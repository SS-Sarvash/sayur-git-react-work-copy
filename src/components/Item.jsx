
function Item ({remove, id}){
    return(
      <div>
        <button onClick={()=>remove(id)}>Fix me. id: {id}</button>
      </div>
    )
  }
  export default Item