import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Admin/Home';
import AddProduct from './component/Admin/AddProduct';
import EditProduct from './component/Admin/EditProduct';
import AddCategory from './component/Admin/AddCategory';
import AllProductList from './component/Admin/AllProductList';
import AllCategoryList from './component/Admin/AllCategoryList';
import UserHome from './component/userhomepage/UserHome';
import Shop from './component/userhomepage/shop';
import Login from './component/login/Login';
import Register from './component/login/Register';
import Cart from './component/userhomepage/Cart';
import UsersList from './component/Admin/userList';
import ContactUs from './component/userhomepage/contactus';
import AboutUs from './component/userhomepage/Aboutus';
import UserProfile from './component/userhomepage/userPage/userProfile';



function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/shop" element={<Shop handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        <Route path="/home" element={<AllProductList />} />
        <Route path="/allcat" element={<AllCategoryList />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="/alluser" element={<UsersList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path='/user/:activepage' element={<UserProfile/>}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs/>} />

      </Routes>
      {warning && <div className="warning">Item is already added to your cart</div>}
    </div>
  );
}

export default App;
