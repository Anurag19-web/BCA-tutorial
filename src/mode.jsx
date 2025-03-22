export const Mode = () =>{
  
let body=document.querySelector('body');
function handleDark(){
  if(body.style.backgroundColor=='black'){
    body.style.backgroundColor='white'
  }else{
    body.style.backgroundColor='black'
  }

}

// function handleLight(){
//     body.style.backgroundColor='white'
// }


    return(<>
        <h1 className="head">MODE PROJECT</h1>
        <button onClick={handleDark} className="dark">DARK MODE</button>
        </>
    )
}