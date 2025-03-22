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
import { CadTopic } from "./assets/Project/Topic/c++Topic"
import "./output.css";
import { Login } from './assets/Project/Account/Login'

function App(){

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
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
          path:"/c++/topic",
          element:<CadTopic/>
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
      ]
    }
  ])
 return (
 <>
 <RouterProvider router={router} />
</>
 )


}

//https://jsonplaceholder.typicode.com/posts
//https://pokeapi.co/api/v2/pokemon/pikachu

export default App

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