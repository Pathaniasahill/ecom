import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="shadow-md  shadow-gray-400 p-5 hover:shadow-2xl border rounded-lg mr-10">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-5[rem] h-[5rem] object-cover object-top "
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Men Slim Mid Rise Black Jeans</p>
              <p className="opacit-50 text-xs font-semibold">Size:M</p>
              <p className="opacit-50 text-xs font-semibold">Color:black</p>
            </div>
          </div>
        </Grid>

        <Grid item size={2}>
<p>Rs1099</p>
        </Grid>

        <Grid item size={4}>
         {true && <div>
             <p>
            <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
            <span>
                Delivered on March 03
            </span>
            
          </p>
          <p className="text-xs">
            Your item has been delivered
          </p>
         </div>}
          {false && <p>
            <span>
               Expected Delivery on Mar 03 
            </span>
          </p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
