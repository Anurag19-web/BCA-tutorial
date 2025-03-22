
function List(props){

    const newItems =props.items;
    const newHead =props.head;

    // const trying= newItems.filter((f)=> f.calories > 100)               

    const itemList = newItems.map((fruit)=> <li key={fruit.id}>{fruit.id}:&nbsp;&nbsp;
                                              {fruit.fName}=&nbsp;&nbsp;
                                              {fruit.calories}</li>)

return(<>
<h2>{newHead}</h2>
  <ul>{itemList}</ul>
</>)

}
export default List