import React,{ useState } from "react"
import "./App.css"

function Bill() {
  const products = [
    {name: 'Mouse (RS. 200)', price: 200},
    {name: 'Key-Board (RS. 1000)', price: 1000},
    {name: 'USB Cabel (RS. 500)', price: 500},
  ]
  const [order,setOrder] = useState([])
  const [currentIndex,setCurrentIndex] = useState(0);
  const [selectedProduct,setSelectProduct] = useState(products[0].price)
  const [quantity,setQuantity] = useState();
  const [totalPrice,setTotalPrice] = useState(0);
  const [textarea,setTextarea] = useState()
  const [customerInfo,setCustomerInfo] = useState({
    name:"",
    email:"",
    phonenumber:"",
  })

  const handleSelectProduct = (e)=>{
  const selectedPrice = products.find(product => product.name === e.target.value).price;
  setTotalPrice(selectedPrice * quantity)
  }

  const handleQuantity = (e) =>{
    const value = Number(e.target.value)
    setQuantity(value)
    setTotalPrice(selectedProduct * value)
  }

  const handleAddCart=()=>{
   console.log(selectedProduct*quantity)
   setTotalPrice(selectedProduct*quantity)
   setTextarea(`Product: ${selectedProduct}
Quantity: ${quantity}
Total Price: ${selectedProduct*quantity}`)
  }

  const handleCustomerInfo=(e)=>{
    const {name, value} = e.target;
    setCustomerInfo((prev)=>({...prev,[name]:value}))
  }

  const handleOrderSubmit=()=>{
  setOrder((prevData) =>[...prevData,
`Name: ${customerInfo.name}
Email: ${customerInfo.email}
Phone No: ${customerInfo.phonenumber} 
${textarea}`
  ])
  setCurrentIndex(0);
  }

  const showFirst = () => setCurrentIndex(0);
  const showPrevious = () => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  const showNext = () => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, order.length - 1))
  const showLast = () => setCurrentIndex(order.length - 1);
  
    return(<>
    <h1 id="head">ADD PRODUCT</h1>
    <div id="select-div">
    <h4 id="selection-header">Product:</h4>
    <select onChange={handleSelectProduct}>
      {products.map((product, index) =>(
        <option key={index} value={product.name}>
          {product.name}
        </option>
      ))}
    </select>

    <h4 id="Quantity-head" >Quantity:</h4>
    <input type="number" id="Quantity" value={quantity} onChange={handleQuantity}/>
    <h4>Total price:</h4>
    <input type="number" id="total-price" value={totalPrice} readOnly/><br/>
    <button id="cart-btn" onClick={handleAddCart}>Add To Cart</button><br/>
    <textarea id="cart-textarea" readOnly cols="40" rows="3" value={textarea}></textarea>

    <h1>CUSTOMER INFO</h1>
    <h4>Name:</h4>
    <input type="text" id="name" name="name" value={customerInfo.name} onChange={handleCustomerInfo}/><br/>
    <h4>Email:</h4>
    <input type="email" id="email" name="email" value={customerInfo.email} onChange={handleCustomerInfo}/><br/>
    <h4>Phone no:</h4>
    <input type="number" maxLength={10} id="phoneNo" name="phonenumber" value={customerInfo.phonenumber} onChange={handleCustomerInfo}/><br/>
    <button id="order-submit" onClick={handleOrderSubmit}>Order Sumbit</button><br/>
    <textarea id="submittedOrder" readOnly cols="40" rows="8" value={order}></textarea><br/>

    <h1>YOUR ORDERS</h1><br/>
    <textarea id="completeOrder" readOnly cols="40" rows="8" value={order[currentIndex] || ''}></textarea><br/>
 <button id="first" onClick={showFirst}>First</button>
 <button id="next" onClick={showNext}>Next</button>
 <button id="previous" onClick={showPrevious}>Previous</button>
 <button id="last" onClick={showLast}>Last</button>
  </div>
    </>
    )
}
export default Bill