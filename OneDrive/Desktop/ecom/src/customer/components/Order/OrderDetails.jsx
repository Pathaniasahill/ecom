import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderDetails = () => {
  return (
    <div>
      <div className="px:5 lg:px20 lg:mx-20 mx:4 border rounded-xl my-4 shadow-lg hover:shadow-2xl px-7 pb-7">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div>
        <OrderTracker activeStep={3} />
      </div>
{ [1,1,1,1,1,].map((item)=>
       <div className="m-3 space-x-4 space-y-3 mr-3  flex items-center justify-center ">
        
        
          <Grid
            container
            
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }} spacing={2}
          >
            <Grid item size={8}>
             
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
                  alt=""
                />
                <div className="ml-5 space-y-2 ">
                  <p className="">Men Slim mid Rise black jeans</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: linaria</p>
                  <p>₹1099 </p>
                </div>
              </div>
            </Grid>
            <Grid item  size={4}>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                 
                  className="flex items-center cursor-pointer "
                >
                  <StarBorderIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-82  text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>

          
     
      </Grid>
      </div>)}
      

      
    </div>
  );
};

export default OrderDetails;
