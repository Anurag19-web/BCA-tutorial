

function Button(){

const handleBut=(e)=>e.target.innerText='done'

return(
    <>
    <button onClick={(e)=>handleBut(e)}>Click me</button>
    </>
)

}
export default Button