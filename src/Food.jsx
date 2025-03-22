
function Food(){

     const food1 ='Mango'
     const food2 ='Apple'
     const food3=[1,2,3,4]
     const food4=[5,6,7,8]
    //  const food5={
    //     firstName:'anurag'
    //  };
    return(
    <ul>
        <li>Banana</li>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3}</li>
        <li>{[...food3,...food4]}&nbsp;&nbsp;&nbsp;&nbsp;{food3[0]+food4[3]}</li>
        {/* <li>{food5}</li> */}
    </ul>
       
    );
}
export default Food;