import React, { useState} from "react";
import {TextField} from "@mui/material";
import RegisterDialogBox from "./register_success";
import axios from "axios";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useRouter } from "next/router";

const api = axios.create({
    baseURL: "http://localhost:3002/api",
  });


const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    width: "120%",
    height: "52px",
    borderRadius: "100px",
    marginBottom: "30px",
    background: "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
    "&:hover": {
      background: "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
    },
    textTransform: "none",
    fontSize: "14px",
    fontWeight: "400",
  }));
  
  const WhiteDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "white",
      width: "490px",
      height: "380px",
    padding:'6px',
      borderRadius: "10px",
    },
  }));
  
  
  const CenteredDialogActions = styled(DialogActions)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
  });


 

export default function NotifyUser({shouldOpen, title, img_url}){
   
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [open, setShouldOpen] = useState(shouldOpen);
    const handleOk = async() => {
        shouldOpen = false;
        setShouldOpen(true);
        console.log(email);
        const response = await api.put("notify-customer", {
            customerEmail: email
        });
        console.log("Response sent Successfully");
        window.location.reload(true);
        window.location.href = '/';
      };
    

      return(
        <>
        <WhiteDialog open={shouldOpen}>
     <CenteredDialogActions>
      <DialogTitle>
        {/* Replace 'your-image-url.jpg' with the actual URL of the image */}
        <img src={img_url} alt="Done" style={{width:"280px",height:'80px', marginBottom:"0px"}}/>
      </DialogTitle>
      <DialogContent>
      <h1 style={{textAlign:"center",fontWeight:"bold",fontSize:"22px",paddingBottom: "20px",fontFamily:'Inter',color:"#00002B"}}>{title}</h1>
      <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onBlur={(e) => setEmail(e.target.value)} // Add this line to check if typing works
          />
        {/* <h1 style={{textAlign:"center",fontWeight:"600",fontSize:"22px",fontFamily:'Inter',color:"#00002B"}}>{title}</h1>
        <input type="email" placeholder="Enter your Email Address" ></input> */}
      </DialogContent>
      <DialogActions>
        <ColorButton onClick={handleOk} style={{width:"120px",height:"40px",fontFamily:'Inter', position: "relative", top: "25%"}}>Get Notified</ColorButton>
      </DialogActions>
      </CenteredDialogActions>
</WhiteDialog>
<RegisterDialogBox shouldOpen={open} title="Success" description="You'll get notified once the platform gets launched. Thank you for Registration." img_url="/assets/img/enquiry/done.jpg"/>

</>
    
      )
}