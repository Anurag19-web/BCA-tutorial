import { useEffect, useState } from "react";
import {  deletePost, getPost } from './PostApi';
import { Form } from "./Form";

export const Posts = () =>{

   const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({})

  console.log(getPost());

  const getPostData = async() =>{
  const res = await getPost();
  console.log(res.data)
  setData(res.data)
  }

  useEffect(()=>{
   getPostData();
  },[])

  const handleDeletePost = async (id) =>{
    try {
      const res = await deletePost(id);
      if(res.status === 200){
        const newUpdatedPosts = data.filter((curPost) =>{
          return curPost.id != id;
        })
        setData(newUpdatedPosts);
        console.log(res)
      }else{
        console.log("failed to delete the post",res.status);
      }      
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdatePost = (curElem) => setUpdateDataApi(curElem)

  return (
    <>
    <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi} />
  <ol>
    {
      data.map((curElem)=>{
        const {id,title,body} = curElem;
       return (
        <li key={id}>
          <p>Title: {title}</p>
          <p>Body: {body}</p>
          <button onClick={()=>handleUpdatePost(curElem)}>Edit</button>
          <button onClick={()=>handleDeletePost(id)}>Delete</button>
          </li>
       )
      })
    }
  </ol>
  </>
  )

}