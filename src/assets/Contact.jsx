import { Form } from "react-router-dom";

export const contactData = async ({request})=>{
    try{
    const res= await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
    }catch(error){
    console.log(error.message);
    }
} 

export const Contact = () =>{

    return(
        <>
        <h1 className="head">Contact Form</h1>
        <Form method="POST" action="/contact">
        <h1>firstname</h1>
        <input type="text" name="firstname" className="input"/>
        <h1>lastname</h1>
        <input type="text" name="lastname" className="input"/>
        <h1>email</h1>
        <input type="email" name="email" className="input"/>
        <button type="submit" className="btn">Click</button>
        </Form>
        </>
    )
}