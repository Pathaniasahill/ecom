import Grid from "@mui/material/Grid";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";

const DeliveryAddressForm = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);
    const address={
      firstName:data.get("firstName"),
      lastName:data.get("SecondName"),
      address:data.get("Address"),
      city:data.get("State"),
      pinCode:data.get("PinCode"),
      mobile:data.get("Mobile"),
    }
    console.log("address",address)
  }
  return (
    <div className="mt-4">
      <Grid container spacing={2}>
        <Grid
          className="border
        rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
          size={5}
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item size={{xs:12, sm:6}}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit} >
              <Grid container spacing={2}>
                 <Grid className=" space-y-3" item size={{xs:12, sm:6}}>
                       
                    <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    />
                    

                 </Grid >
                 <Grid className=" space-y-3 mb-4" item size={{xs:12, sm:6}}>
                       <TextField
                    required
                    id="SecondName"
                    name="SecondName"
                    label="Second Name"
                    fullWidth
                    autoComplete="given-name"
                    />
                 </Grid>
              </Grid>
                 <Grid className=" space-y-3 mb-4" item size={{xs:12}}>
                       <TextField
                    required
                    id="Address"
                    name="Address"
                    label="Address"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="given-name"
                    />
                 </Grid>
                   
                   <Grid container spacing={2}>
                 <Grid className=" space-y-3 mb-4" item size={{xs:12, sm:6}}>
                       
                    <TextField
                    required
                    id="City"
                    name="City"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                    />
                    

                 </Grid >
                 <Grid className=" space-y-3 mb-2" item size={{xs:12, sm:6}}>
                       <TextField
                    required
                    id="State"
                    name="State"
                    label="State"
                    fullWidth
                    autoComplete="given-name"
                    />
                 </Grid>
              </Grid>

              <Grid container spacing={2}>
                 <Grid className=" space-y-3" item size={{xs:12, sm:6}}>
                       
                    <TextField
                    required
                    id="PinCode"
                    name="PinCode"
                    label="PinCode"
                    fullWidth
                    autoComplete="shipping postal-code"
                    />
                    

                 </Grid >
                 <Grid className=" space-y-3 mb-2" item size={{xs:12, sm:6}}>
                       <TextField
                    required
                    id="Mobile"
                    name="Mobile"
                    label="Mobile"
                    fullWidth
                    autoComplete="given-name"
                    />
                 </Grid>
                 <Grid item size={{xs:12, sm:6}}>
                  
                  <Button
              sx={{ py:1.5,mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
              type="submit"
            >
              Deliver Here
            </Button>
                 </Grid>
              </Grid>
                  
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
