import { useEffect, useState } from "react"
import { deletePost, getPost } from "./PostApi";
import { Form } from "react-router-dom";

export const Posts = () =>{

  const [data,setData] = useState([]);

  console.log(getPost());

  const getPostData = async ()=>{
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  }

  useEffect(()=>{
   getPostData();
  },[])

  const handleDeletePost = async (id)=>{
    try {
      const res= await deletePost(id);
      if(res.status===200){
        const newUpdatedApi = data.filter((curPost)=>{
          return curPost.id!==id;
        })
        setData(newUpdatedApi);
        console.log(newUpdatedApi);
      }else{
        console.log("data can't deleted", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <>
    <Form data={data} setData={setData} />
    <ol>
    {
      data.map((curElem)=>{
        const {id,title,body} = curElem;
        return(
          <li key={id}>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            <button>Edit</button>
            <button onClick={()=>handleDeletePost(id)}>Delete</button>
          </li>
        )
      })
    }
    </ol>
    </>
  )
}