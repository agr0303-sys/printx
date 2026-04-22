// CartPage.js
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import CartItem from "./CartItems";
import { Link } from "react-router-dom";
import ToolBar from "../user/ToolBar";
import Backdrop from "../user/Backdrop";
import Sidebar from "../user/Sidebar";
import {makeorder } from "../../reactquertfunctions/ordermangementroute";
import { clear } from "../../redux/Slices/CartSlice";
import { useMutation } from "@tanstack/react-query";
import API_BASE_URL from "../../apiConfig";
const CartPage = () => {
  const dispatch = useDispatch();
  const cartItemss = useSelector((state) => state.cart);
 console.log("cart ka samman", cartItemss);
  const [totalAmount, setTotalAmount] = useState(0);
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
  
  
  const handlePlaceOrder = async () => {
    const upiId = prompt("Enter your UPI ID:");
    if (!upiId) {
      // If user cancels or enters empty string, return early
      console.log("UPI ID not provided.");
      return;
    }
    console.log("order handle")
    const orders = cartItemss.map((cartItem) => {
      const { Instructions, fileId } = cartItem;
    
      // Assuming Instructions and fileId are present in each cart item
      return {
        instructions: Instructions,
        fileId: fileId,
      };
    });
    const printshop= cartItemss.length > 0 ? cartItemss[0].shopId: null;
      try {
        const tokenCookie = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith('token='))
    .split('=')[1];
    console.log(tokenCookie,"  is token")
        const datak = {
          printshop:printshop,
          order_total:totalAmount,
          payment_mode:"UPI",
          payment_id:printshop+generateRandomString(20),
          orders:orders
        };
        console.log("datak is  ",datak)
        const response = await fetch(`${API_BASE_URL}printx/api/v1/order/sendorder`, {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${tokenCookie}`,
            "Content-Type": "application/json",
            "Cookie": tokenCookie,
            // Add other headers as needed, such as authorization headers
          },
          body: JSON.stringify(datak),
        });
        
    
        if (!response.ok) {
          throw new Error(`Failed to makeorder file: ${response.statusText}`);
        }
          alert("Order placed successfully")
        const data = await response.json();
        console.log("Make order  successful, response data:", data);
        dispatch(clear());
        return data.order;
      } catch (error) {
        console.warn("Make order error:", error);
        throw error;
      }
   
  };

  useEffect(() => { 
    setTotalAmount(cartItemss.reduce((acc, curr) => acc + curr.amount, 0));
  }, [cartItemss]);

 return ;
};

export default CartPage;
