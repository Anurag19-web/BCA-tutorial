import './assets/Project/Project.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./assets/Project/Home"
import { AppLayout } from "./assets/Project/layout/AppLayout"
import { Categories } from "./assets/Project/Categories"
import { Videos } from "./assets/Project/Videos"
import { SemOneSubject } from "./assets/Project/Sem/SemOneSubject"
import { SemTwoSubject } from "./assets/Project/Sem/SemTwoSubject"
import { SemThreeSubject } from "./assets/Project/Sem/SemThreeSubject"
import {  CssTopic } from "./assets/Project/Topic/CssTopic"
import { CodeTopic } from "./assets/Project/Topic/CodeTopic"
import { Topic } from "./assets/Project/Topic/Topic"
import { HtmlTopic } from "./assets/Project/Topic/HtmlTopic"
import { CTopic } from "./assets/Project/Topic/CTopic"
import { DbmsTopic } from "./assets/Project/Topic/DbmsTopic"
import { Signup } from "./assets/Project/Account/Signup"
import { JavascriptTopic } from "./assets/Project/Topic/JavascriptTopic"
import { PythonTopic } from "./assets/Project/Topic/PythonTopic"
import { JavaTopic } from "./assets/Project/Topic/JavaTopic"
import { CppTopic } from "./assets/Project/Topic/cppTopic"
// import "./output.css";
import { Login } from './assets/Project/Account/Login'
import { createContext, useEffect, useState } from 'react'
import { AboutUs } from './assets/Project/Footers/AboutUs'
import { Help } from './assets/Project/Footers/Help'
import { Contact } from './assets/Project/Footers/Contact'
import { Posts } from './assets/Posts'

function App(){

  const body=document.querySelector('body')

  const [theme,setTheme] = useState("light");
  useEffect(()=>{
    const matchMedia = window.matchMedia("(prefers-color-scheme : dark)");

    const setInitialTheme = () =>{
      setTheme(matchMedia.matches ? "dark" : "light");
    }
    
    setInitialTheme();
    const themeChangeListener = (e) =>{
      setTheme(e.matches ? "dark" : "light");
    }

    matchMedia.addEventListener("change", themeChangeListener)
    

    return()=>{
      matchMedia.removeEventListener("change", themeChangeListener);
    }
  },[])

  if(theme==="dark"){
    body.style.backgroundColor="black"
    body.style.color="white";
  }
  else if(theme === "light"){
    body.style.backgroundColor="white"
    body.style.color="black";
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/categories",
          element:<Categories/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/Sem1/subject",
          element:<SemOneSubject/>
        },
        {
          path:"/Sem2/subject",
          element:<SemTwoSubject/>
        },
        {
          path:"/Sem3/subject",
          element:<SemThreeSubject/>
        },
        {
          path:"/topic",
          element:<Topic/>
        },
        {
          path:"/html/topic",
          element:<HtmlTopic/>
        },
        {
          path:"/css/topic",
          element:<CssTopic/>
        },
        {
          path:"/code/topic",
          element:<CodeTopic/>
        },
        {
          path:"/javascript/topic",
          element:<JavascriptTopic/>
        },
        {
          path:"/c/topic",
          element:<CTopic/>
        },
        {
          path:"/dbms/topic",
          element:<DbmsTopic/>
        },
        {
          path:"/cpp/topic",
          element:<CppTopic/>
        },
        {
          path:"/java/topic",
          element:<JavaTopic/>
        },
        {
          path:"/python/topic",
          element:<PythonTopic/>
        },
        {
          path:"/videos",
          element:<Videos/>
        },
        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/help",
          element:<Help/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
      ]
    }
  ])
 
 return (
 <>
 <RouterProvider router={router} theme={theme}  />
 </>  
 )
}


export default App

//https://jsonplaceholder.typicode.com/posts
//https://pokeapi.co/api/v2/pokemon/pikachu


// import './App.css'
// import { Posts } from './assets/Posts'
// import { createBrowserRouter , RouterProvider } from 'react-router-dom'
// import {Home} from './assets/Home'
// import {About} from './assets/About'
// import {Movie} from './assets/Movie'
// import { AppLayout } from './layout/AppLayout'
// import { Api } from './Api.jsx'
// import { MovieDetails } from './assets/MovieDetails'
// import { Contact, contactData } from './assets/Contact.jsx'

  // return <Posts/>

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<AppLayout/>,
  //     children:[
  //       {
  //         path:'/',
  //         element:<Home/>,
  //       },
  //       {
  //         path:'/about',
  //         element:<About/>,
  //       },
  //       {
  //         path:'/movie',
  //         element:<Movie/>,
  //         loader:Api,
  //       },
  //       {
  //         path:'/movie/:movieID',
  //         element:<MovieDetails/>,
  //         loader:MovieDetails,                
  //       },
  //       {
  //         path:'/contact',
  //         element:<Contact/>,
  //         action:contactData,
  //       },
  //     ]
  //   },
  // ])

  // return <RouterProvider router={router}/>