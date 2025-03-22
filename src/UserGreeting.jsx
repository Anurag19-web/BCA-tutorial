

function UserGreeting(props){

  const Done=<h2>Done {props.userName}</h2>
  const Fail=<h2>Fail {props.userName}</h2>

    return(
        <>
        {props.Logged ? Done : Fail }
        </>
    )
}

export default UserGreeting