import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useParams } from 'react-router-dom';
import {CgMathPlus} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { useHistory  } from 'react-router-dom';


const drawerBleeding = 49;
const pp = 80
const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? '#0d111b' : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#0d111b' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 36,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? '#0d111b' : '#0d111b',
  borderRadius: 3,
  position: 'absolute',
  top: 9,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const history = useHistory()
  const { window,id , src ,poster , overview , mid , mt} = props;
  const params = useParams();




  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;
  
    const abc = path => {
       history.push(`/movie_details/${mid}/${mt}`);
      console.log("clicked")
    }

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(45% - ${pp}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>
          <img 
          className='h-full w-full rounded-lg object-cover'
          src={props.src} />
        </Button>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        variant="temporary"
        ModalProps={{
          keepMounted: false,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
        {/* ----------------content inside drawer --------- */}
          <Puller />
          <Typography className='capitalize text-slate-300' sx={{ p: 2 }}>{mt}</Typography>
          <div className='flex p-2 lg:p-4 mb-0 gap-4 lg:gap-10'>
            <img 
            className=' ml-2 lg:ml-10  h-44 lg:h-52 md:48 rounded-md'
            src={props.poster} />
            <div>
             <h1 className='lg:text-4xl h-6 lg:h-10 overflow-hidden  text-2xl text-slate-50'>
              {id}
             </h1>
             <p className='mt-4 lg:mt-6 pt-1 text-slate-200 w-10/12 lg:w-11/12 lg:py-0 text-ellipsis h-32 mb-4 lg:mb-0 overflow-hidden'>
                {overview}
              </p>

               {/*------- button for large screen -------*/}

      <div className=' z-10 mx-0 mt-0 mb-10  gap-10 center hidden lg:flex relative'>
        <button 
         className='flex gap-2 shadow-lg rounded-sm z-10 -top-10 left-48 absolute  px-8 py-3 ' style={{backgroundColor : "#1c2438"}}><CgMathPlus size={20}/>  Watchlist</button>
        <button 
         onClick={() => abc('/') }
        className='flex gap-2 shadow-lg rounded-sm cursor-help z-10 -top-10 left-10 absolute  px-8 py-3' style={{backgroundColor : "#1c2438"}}><CgMathPlus size={20}/>
        VIEW
        </button>
        </div>
       </div>
          </div>
          <div>
          {/* //------------button for small screen ---------*/}
          <div className='mx-5 mt-0 flex z-10  gap-10 center lg:hidden'>
        <button 
         className='flex gap-2 shadow-lg rounded-sm   px-8 py-3 ' style={{backgroundColor : "#1c2438"}}><CgMathPlus size={20}/>  Watchlist
         </button>
         {/* <Link to={`/movie_details/${mid}/${mt}/`}> */}
        <button 
         onClick={()=>{
          abc('/')
         }}
        className=' flex gap-2 shadow-lg rounded-sm cursor-pointer  px-8 py-3 z-50' style={{backgroundColor : "#1c2438"}}><CgMathPlus size={20}/>
          VIEW
        </button>
        {/* </Link> */}
        </div>
          </div>
        </StyledBox>
        <StyledBox
          sx={{
            px: 1,
            pb: 2,
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;