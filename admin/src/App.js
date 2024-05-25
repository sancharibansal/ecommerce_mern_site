import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from './pages/login/Login';

function App() {

//   // const admin = console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin)

//     // Attempt to get the persisted data from localStorage
//     const persistedData = localStorage.getItem("persist:root");

//     if (!persistedData) {
//       console.error("Persisted data not found in localStorage");
//     }
  
//     // Attempt to parse the user data from persistedData
//     const userData = persistedData ? JSON.parse(JSON.parse(persistedData).user) : null;
  
//     // Attempt to get isAdmin from userData
//     const isAdmin = userData?.currentUser?.isAdmin || false;

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
          <>
            <Topbar />
        <div className="container">
          <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </div>
      </>
      </Switch>
    </Router>
  );
}

export default App;
