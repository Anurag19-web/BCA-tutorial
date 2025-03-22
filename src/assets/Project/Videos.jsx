import { NavLink, useLocation } from "react-router-dom";
// import YouTube from "react-youtube";
import { useEffect } from "react";
import { useState } from "react";
import Project from "./Topic/Project.json";

export const Videos = () =>{ 
    
    const location=useLocation();
    const {state} = location;
    const {page} = location.state;
    const [video,setVideo] = useState([]);
    const indexsToStyles = [page]

    // const opts={
    //     height:"360",
    //     width:"640",
    //     playerVars:{
    //         autoplay:0,
    //     }
    // }

    // const styling =  useRef();

    // const [jsonvideo,setJsonvideo] = useState(Records);
    //     const item = jsonvideo.find((obj)=>obj);
    //     console.log(item)

        // useEffect(()=>{
        // fetch('/Project.json')
        // .then((res)=> res.json())
        // .then((Project)=>{
        //     setVideo(Project);
        // })
        // },[]); 

        // const handleFunction = async () =>{
        //     try {
        //         const res = await fetch("/Project.json");
        //         const data = await res.json();
        //         setVideo(data)
        //     } catch (error) {
        //       console.log(error);
        //     }
        // }

        useEffect(()=>{
       setVideo(Project)
        },[])   

        if(page==="javascript"){
        if(video && video[7] && video[7].javascript){
            return (
                <>
                <div className="Videos-head-div">
                <h1>Accounting Process & Finalistion of Accounts</h1>
                <p>Below are the videos for this chapter. Watch them in sequence to master the concepts.</p>
                </div>
                <div>
                    {
                        video[7].javascript.map((jsData) =>{
                            const {id,name,URL} = jsData;
                            return(
                                <div className="VideosDiv" key={id}>
                                {/* <p>{id}</p> */}
               
               <iframe width="450" height="300" src={URL} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
               {/* <NavLink to={URL} className="VideoLink">click here</NavLink> */}
               </iframe>
               {/* <h1 className="VideoHead">{name}</h1> */}
                                </div>
                            )
                           })
                    }
                </div>
                </>
            )
        }
    }

    if(page==="python"){
        if(video && video[14] && video[14].python){
            return (
                <>
                <div className="Videos-head-div">
                <h1>Accounting Process & Finalistion of Accounts</h1>
                <p>Below are the videos for this chapter. Watch them in sequence to master the concepts.</p>
                </div>
                <div>
                    {
                        video[14].python.map((pyData) =>{
                            const {id,name,URL} = pyData;
                            return(
                                <div className="VideosDiv" key={id}>
                                {/* <p>{id}</p> */}
               
               <iframe width="450" height="300" src={URL} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
               {/* <NavLink to={URL} className="VideoLink">click here</NavLink> */}
               </iframe>
               {/* <h1 className="VideoHead">{name}</h1> */}
                                </div>
                            )
                           })
                    }
                </div>
                </>
            )
        }
    }

    return(
        <>
        {/* <YouTube videoId="dQw49WgXcQ" opts={opts}/> */}
        <div className="Videos-head-div">
            <h1>Accounting Process & Finalistion of Accounts</h1>
            <p>Below are the videos for this chapter. Watch them in sequence to master the concepts.</p>
        </div>
        <br/>
        <div className="VideosMainDiv">
        {/* <h1 className="Videos-head">VIDEOS</h1> */}
          {
    video.map((data) =>{
      const {id,name,URL} = data;
        return(
            <div key={id} className="VideosDiv" style={{display:indexsToStyles.includes(id) ? "block" :"none"}}>
               {/* <p>{id}</p> */}
               
               <iframe width="450" height="300" src={URL} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
               {/* <NavLink to={URL} className="VideoLink">click here</NavLink> */}
               </iframe>
               {/* <h1 className="VideoHead">{name}</h1> */}
            </div>
            )
        })
    }
        </div>
        </>
    )
}