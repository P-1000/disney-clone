import React , {useEffect , useState} from 'react'
import {auth , provider} from '../features/firebase'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
import { selectUserName  , selectUserPhoto , setUserLogin, setUserLoginDetails , setSignOut , sui} from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux' 
import {AiOutlineSearch} from 'react-icons/ai'
import { border, Box, Flex } from "@chakra-ui/react"
import SearchBar from './SearchBar'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlinePlus}  from 'react-icons/ai'
import {VscDebugStart} from 'react-icons/vsc'
import {BiStats} from 'react-icons/bi'
import {MdMovie} from 'react-icons/md'
import {BiSlideshow} from 'react-icons/bi'
import {TbBrandDisney} from 'react-icons/tb'

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Button,
    Portal,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
  import firebase from "firebase/compat/app";
  import { selectUser } from '../features/apiSlice/apiSlice'
  import {setUser } from '../features/apiSlice/apiSlice'
  import SearchResults from './SearchResults'

function Header() {
    const dispatch = useDispatch()
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const [currentUser, setCurrentUser] = useState(null);

const ui = useSelector(sui)
    // useEffect(() => {
    //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       // User is signed in.
    //       setCurrentUser(user);
    //     } else {
    //       // User is signed out.
    //       setCurrentUser(null);
    //     }
    //   },[])

    //getting id user :: ---- watchlist 

    // useEffect(()=>{
    //   const unsubscribe = auth.onAuthStateChanged((user)=>{
    //     if(user){
    //       setCurrentUser(user)
    //       dispatch((setUser({
    //         um : JSON.stringify(currentUser),
    //       })))
    //     }
    //     else{
    //       setCurrentUser(null)
    //     }
    //   })
    // },[])

    



    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
                if(user){
                    dispatch((setUserLoginDetails({
                        name : user.displayName,
                        email :user.email,
                        photo :user.photoURL ,
                        useri : user.uid
                    })))
             
                 //     history.push('/')
                }

        })
    },[ui])

  

    const signIn = () => {
            auth.signInWithPopup(provider).then((result)=>{
                dispatch((setUserLoginDetails({
                    name : result.user.displayName,
                    email : result.user.email,
                    photo : result.user.photoURL ,
                    uid : result.user.uid
                })))
            
                 history.push('/')
            })
    }

    const signOut = () => {
        auth.signOut().then(()=>{
            dispatch(setSignOut())
            history.push('/login')
        })
    }

    // ---- query searching -----

    const [query1 , setQuery] = useState(null);
    const [call , setCall] = useState(false);

    function putVal(e){
      setQuery(e.target.value); 
    }
    function onSubmitHandler(e){
      e.preventDefault();
      setCall(true);
    history.push(`/search/${query1}`)
    //history.push("/login")
    }

  return (
    <Nav className='fixed  z-50 h-full w-full bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
      <Logo className='hidden lg:block' src='https://disney-clone-woad.vercel.app/images/images/logo.svg' />
      <TbBrandDisney  className='lg:hidden text-3xl' />
      {
        !userName ?  (<Login onClick={signIn}>
            Login 
        </Login> ) : 
        <>
        <NavMenu>
            <a onClick={()=>{
                 history.push('/')
            }}>
               <AiFillHome  className='mx-1 hidden lg:block'/>
                <span className='cursor-pointer'>HOME</span>
            </a>
            <a>
               <AiOutlineSearch className='mx-1 hidden lg:block'/>
                <span className='cursor-pointer'>SEARCH</span>
            </a>
            <a onClick={()=>{
                 history.push('/myWatchlist')
            }}>
                <AiOutlinePlus className='mx-1 hidden lg:block'/>
                <span className='cursor-pointer'>WATCHLIST</span>
            </a>
            <a onClick={()=>{
                 history.push('/Stats')
            }}
            >
               <BiStats className='mx-1 hidden lg:block'/>
                <span className='cursor-pointer'>STATS</span>
            </a>
            <a onClick={()=>{
                 history.push('/MOVIES')
            }}>
              <MdMovie className='mx-1 hidden lg:block'/>
                <span className='cursor-pointer'>MOVIES</span>
            </a>
            <a>
                <BiSlideshow className='mx-1 hidden lg:block'/>
                <span>SERIES</span>
            </a>
            
      </NavMenu>
      
      <div className='user flex gap-4'>

<div className='search hidden lg:flex  w-full'>

<form className="w-full max-w-sm " onSubmit={onSubmitHandler}>
  <div className="flex items-center border-b border-white-500 py-1" >
    <input  onChange={putVal}
    className="appearance-none bg-transparent border-none w-full text-white-700 mr-3 px-2 focus:text-white-700  focus:mr-40 transition-all duration-700 leading-tight focus:outline-none outline-none " type="text" placeholder="Search" aria-label="Query"/>
    <button 
  
     className="flex-shrink-0   text-md  text-white py-1 px-2 rounded" type="submit">
      <AiOutlineSearch/>
    </button>
  </div>
</form>
{/* <SearchResults onSubmit={handleSearch} /> */}

</div>

            <Profile className=''>
           <Popover>
           
                <PopoverTrigger>
                          <Button style={child}>  
                           
                                  <Userimg  src={userPhoto } />
                          </Button>
                         </PopoverTrigger>
                            <Portal>
                         <PopoverContent className='bg-white-200'>
                        <PO>
                    <div className='z-50 '>
                    <Button className='z-50 hover:bg-slate-200' p={8} style={parent1} onClick={()=>{
                        history.push('/profile')
                    }}>PROFILE</Button>
                     <PopoverBody>
                   <Button className='z-30'  onClick={signOut} style={parent1} p={8}>SIGN OUT</Button>
                      </PopoverBody>
                     <Button className='hover:bg-slate-200 b0' p={8} style={parent1}>HELP</Button>
                    </div>
                     </PO>
                 </PopoverContent>
                </Portal>
                    </Popover>
                    </Profile>
                    </div>
        </>
      }
     
    </Nav>
  )
}

export default Header

const PO = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #090b13;
    color: white;
    width: 120px;
    height: 120px;
    margin-right: 32px;
    pointer:cursor;
    border-radius: 4px;
`

const oc = styled.div`
  border-bottom:blue;
`

const child = {
    width : "44px",
    height: "44px",
    curosor : "pointer",
    border : "5px solid white",
    borderRadius : "50%",
  }
const parent1 = {
    backgroundColor: "#090b13",
    color: "white",
        backgroundRepeat:"no-repeat",
    border: "none"
};

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  ${'' /* background-color: #090b13; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  overflow:hidden;

  `
 const Logo = styled.img`
        width: 68px;
 `;

 const NavMenu = styled.div`

    display : flex;
    flex : 1;
    margin-left :  25px;
    align-items : center;
    {/* small screen : */}
    @media only screen and (max-width: 479px){
  a{
    display:none;
  }
  img{
    display:none;
  }
  span{
    display:none;
  }
}
    {/* md screen :  */}

    @media only screen and (min-width: 480px) and (max-width: 768px){
        a{
    display:none;
  }
  img{
    display:none;
  }
  span{
    display:none;
  }
}

    a{
        display:flex;
        align-items : center;
        padding:0 12px;
        curosor : pointer;
        img{
            height:20px;
        }
        span{
            font-size : 13px;
            letter-spacing : 1.42px;
            position: relative;
            &:after {
                content : "";
                height : 2px;
                background:white;
                position: absolute;
                left:0;
                right:0;
                bottom : -6px;
                opacity : 0;
                transition : all 250ms cubic-bezier(0.25, 0.46 , 0.45 , 0.94) 0s;
                transform : scaleX(0);
            }
        }
        &:hover{
            span:after{
                opacity : 1;
                transform : scaleX(1);
            }
        }
    }
 `
 
 const Userimg = styled.img`
        width : 34px;
        height: 34px;
        border-radius : 50%;
        object-fit : cover;
        curosor : pointer;

 `

const Login = styled.div`
    border : 1px solid #f9f9f9;
    padding : 8px 16px;
    border-radius : 4px;
    letter-spacing : 1.5px;
    text-transform : uppercase;
    background-color : rgba(0,0,0,0.6);
    transition : all 0.2s ease 0s;
    curosor : pointer;
    &:hover{
        background-color : #f9f9f9;
        color : #000;
        border-color : transparent;
    }

`

const Profile = styled.div`
  margin-left:74px !important;

`
const UserTab = styled.div`
    overflow:visible;
`
