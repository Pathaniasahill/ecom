import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center space-x-5 ">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h[9rem] px-1">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="m5 space-y-1">
          <p className="font-semibold">Men Slim Mid Black Jeans</p>
          <p className="opacity-70">Size:L, white</p>
          <p className="opacity-70 mt-2">Seller: Crishtaliyo 2fashion</p>
          <div className="flex space-x-5 items-center  text-gray-900 mt-6">
            <p className="font-semibold">rs 199</p>
            <p className="opacity-50 line-through">rs 211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
        
      </div>
      <div className="lg:flex items-centerlg:space-x-10 pt-4">
            <div className="flex items-center space-x-3">
               <span className="py-1 px-2  rounded-sm">
            <IconButton >
               <RemoveIcon/> 
            </IconButton>
            </span> 
            <span className="py-1 px-2 border rounded-sm">
                3
            </span>
            <span className="py-1 px-2  rounded-sm">
                <IconButton >
               <AddIcon/> 
            </IconButton>
            </span>
            </div>
            <div className="pt-1">
                <Button variant="outlined" sx={{color:"RGB(145 85 253)"}}>Remove</Button>
            </div>

        </div>
    </div>
  );
};

export default CartItem;
