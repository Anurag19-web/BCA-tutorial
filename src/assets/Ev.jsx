import { useEffect, useState } from "react"

export const FETCHING = () =>{

 const [firstname,setFirstName] = useState("");
 const [lastname,setlastName] = useState("");
 const [email,setEmail] = useState("");

  const handleSubmit = (e) =>{
   e.preventDefault();
   const user={
    firstname,
    lastname,
    email,
   }
   console.log(user)
  }

 return(
  <>
  <h1 className="head">Form</h1>
  <form onSubmit={handleSubmit}>
  <h3>firstname</h3>
  <input type="text" className="input" name="firstname" value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
  <h3>lastname</h3>
  <input type="text" className="input" name="lastname" value={lastname} onChange={(e)=>setlastName(e.target.value)}/>
  <h3>email</h3>
  <input type="email" className="input" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <button className="btn" type="submit">CLick here</button>
  </form>
  </>
 )
}

// import {createBrowserRouter , RouterProvider} from "react-router-dom";


// import { Home } from './assets/Home';
// import { Movie } from './assets/Movie';
// import { About } from './assets/About';
// import { AppLayout } from './layout/AppLayout';


  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element: <AppLayout/>,
  //     children:[
  //       {
  //           path:'/',
  //           element: <Home/>,
  //         },
        
  //         {
  //           path:'/movie',
  //           element: <Movie/>,
  //         },
        
  //         {
  //           path:'/about',
  //           element: <About/>,
  //         },
        
  //     ]
  //   },
  
  // ])

  // return <RouterProvider router={router}/>



// import { createBrowserRouter , RouterProvider } from 'react-router-dom'
// import {Home} from './assets/Home'
// import {About} from './assets/About'
// import {Movie} from './assets/Movie'
// import { AppLayout } from './layout/AppLayout'
// import { Api } from './Api.jsx'
// import { MovieDetails } from './assets/MovieDetails'
// import { Contact, contactData } from './assets/Contact.jsx'

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