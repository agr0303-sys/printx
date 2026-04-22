// OrderDetails.js
import React from "react";
import API_BASE_URL from "../../apiConfig";
const OrderDetails = ({ orders }) => {

  const handleShowDocuments = async (fileId) => {
    console.log("button pressed");
  

    try {
      const response = await fetch(
        `${API_BASE_URL}printx/api/v1/filemange/view/${fileId}`,
        {
          method: "GET",
          // Do not set custom headers unless allowed by the server
        }
      );

      // Check if the request was successful
      if (response.ok) {
        const redirectURL = await response.json();
        // window.open(redirectURL, "_blank");
        console.log("here ", redirectURL.url);
        window.open(redirectURL.url, "_blank");
      } else {
        console.error("Failed to fetch:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    
  );
};

export default OrderDetails;
