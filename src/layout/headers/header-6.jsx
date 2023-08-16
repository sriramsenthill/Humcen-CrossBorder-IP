import Link from 'next/link';
import React from 'react';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from '../../hooks/use-firebase';
import styled from 'styled-components';
import useSticky from '../../hooks/use-sticky';
import { get_user } from '../../redux/features/auth-slice';
import Languages from './component/languages';
import MobileMenu from './mobile-menu';
import NavMenus from './nav-menus';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';




const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  width: "100%",
  height: "55px",
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

const WhiteDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    backgroundColor: "white",
    width: "590px",
    height: "380px",
    textAlign:'center',
  padding:'25px',
    borderRadius: "10px",
  },
}));


const CenteredDialogActions = styled(DialogActions)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection:'column',
});


const HeaderSix = () => {
  // headerSticky
  const { headerSticky } = useSticky();
  // user
  const {user} = useSelector(state => state.auth);
  // firebase logout
  const {logout} = useFirebase();
  // dispatch
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  
  // get_user
  useEffect(() => {
    dispatch(get_user())
  },[dispatch])
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div id="header-sticky" className={`tp-header-area-two tp-header-bg header-transparent header-transparent-two ${headerSticky ? 'header-sticky' : ''}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a><img src="/assets/img/logo/logo-blue.png" alt="" /></a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="tp-main-menu tp-menu-black tp-bs-menu tp-bp-menu text-center">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-1">
                <div className="tp-header-left d-flex align-items-center justify-content-end ">
               
                  <div className="tp-header-yellow-button" style={{
                    width : "100 px",
                  }}>
                        <button className="tp-btn mr-55" style={{ backgroundColor: "#00002B" }} onClick={openDialog}>Platform</button>
                        <WhiteDialog open={isDialogOpen} onClose={closeDialog}>
     <CenteredDialogActions>
      <DialogTitle  style={{textAlign:'center'}}>
       We are Excited to Bring You Our Cross Border IP Platform!
      </DialogTitle>
      <DialogContent style={{textAlign:"center",fontWeight:"500",fontSize:"20px",fontFamily:'Inter',color:"#8C8E8F"}}>
       
        Currently Under Construction, Coming Soon!<br/>Click the Button Below to Get Notified When We Launch!
      </DialogContent>
      <DialogActions>
        <ColorButton onClick={closeDialog} style={{width:"170px",height:"60px",fontFamily:'Inter',fontWeight:'600'}}>Notify Me on Launch</ColorButton>
      </DialogActions>
      </CenteredDialogActions>

</WhiteDialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo-blue.png"} transparent={false} />
      {/* <!-- mobile-menu-area-end --> */}
     
    </React.Fragment>
  );
};

export default HeaderSix;