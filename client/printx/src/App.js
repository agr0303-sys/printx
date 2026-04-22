import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/user/SignUp";
import Institute from "./components/Institute";
import Login from "./components/user/Login";
import ShopStore from "./components/shopes/ShopStore";
import Register from "./components/client/Register";
import LoginClient from "./components/client/LoginClient";
import ShopDetails from "./components/shopes/shopdetails"
import UploadDocument from "./components/shopes/UploadDocument";
import CartPage from "./components/orders/cartpage";
import Order from "./components/user/Order";
import Ordershop from "./components/shopuseer/Order"
import Menupage from "./components/shophomepage/Menupage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/institute/:Id" component={Institute} />
          <Route path="/register" component={Register} />
          <Route path="/loginclient" component={LoginClient} />
          <Route path="/login" component={Login} />
          <Route path="/shopdetails/:Id/:name" exact component={ShopDetails} />
          <Route path="/shopdetails/:Id/uploaddocument/:Id/:name" exact component={UploadDocument} />
          <Route path="/cart" component={CartPage} />
          <Route path="/order" component={Order} />
          <Route path="/shopmenu" component={Menupage} />
          <Route path="/ordershop" component={Ordershop} />
          <Route path="/" component={ShopStore} />
          <Route path="/*" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
