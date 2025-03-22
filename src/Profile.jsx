

function Profile(){
const image ='./src/assets/collection-1.jpg'
const msg=(e)=>e.target.style.display='none'

return(
    <>
    <img onClick={msg} src={image}></img>
    </>
)

}
export default Profile