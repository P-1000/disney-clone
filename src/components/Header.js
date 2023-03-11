import React , {useEffect , useState} from 'react'
import {auth , provider} from '../features/firebase'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
import { selectUserName  , selectUserPhoto , setUserLogin, setUserLoginDetails , setSignOut} from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux' 
import {AiOutlineSearch} from 'react-icons/ai'
import { border, Box, Flex } from "@chakra-ui/react"
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

function Header() {
    const dispatch = useDispatch()
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
                if(user){
                    dispatch((setUserLoginDetails({
                        name : user.displayName,
                        email :user.email,
                        photo :user.photoURL 
                    })))
                     //  history.push('/')
                }

        })
    },[])

    const signIn = () => {
            auth.signInWithPopup(provider).then((result)=>{
                dispatch((setUserLoginDetails({
                    name : result.user.displayName,
                    email : result.user.email,
                    photo : result.user.photoURL 
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

    const [query , setQuery] = useState(null);
    const [call , setCall] = useState(false);

    function putVal(e){
      setQuery(e.target.value); 
    }
    function onSubmitHandler(e){
      setCall(true);
      console.log(query + "on submit")
      history.push(`/search/${query}`)
    }

  return (
    <Nav>
      <Logo src='./images/logo.svg'/>
      {
        !userName ?  (<Login onClick={signIn}>
            Login 
        </Login> ) : 
        <>
        <NavMenu>
            <a onClick={()=>{
                 history.push('/')
            }}>
                <img src = './images/home-icon.svg'/>
                <span>HOME</span>
            </a>
            <a>
                <img src = './images/search-icon.svg'/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src = './images/watchlist-icon.svg'/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src = './images/original-icon.svg'/>
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src = './images/movie-icon.svg'/>
                <span>MOVIES</span>
            </a>
            <a>
                <img src = './images/series-icon.svg'/>
                <span>SERIES</span>
            </a>
            
      </NavMenu>
      
      <div className='user flex gap-10'>

<div className='search flex w-full'>

<form className="w-full max-w-sm" onSubmit={()=>{
  onSubmitHandler()
}}>
  <div className="flex items-center border-b border-grey-500 py-1" onClick={oc}>
    <input  onChange={putVal}
    className="appearance-none bg-transparent border-none w-full text-white-700 mr-3 px-2 focus:text-white-700  focus:mr-40 transition-all duration-700 leading-tight focus:outline-none outline-none " type="text" placeholder="Search" aria-label="Query"/>
    <Link to={`/search/${query}`}>
    <button
    onClick={()=>{
                 onSubmitHandler()
                    }}
     className="flex-shrink-0   text-md  text-white py-1 px-2 rounded" type="submit">
      <AiOutlineSearch/>
    </button>
    </Link>
  </div>
</form>

</div>

            <Profile>
           <Popover>
                <PopoverTrigger>
                          <Button style={child}>    
                                  <Userimg src={userPhoto } />
                          </Button>
                         </PopoverTrigger>
                            <Portal>
                         <PopoverContent>
                        <PO>
                    <Button p={8} style={parent1} onClick={()=>{
                        history.push('/profile')
                    }}>PROFILE</Button>
                     <PopoverBody>
                   <Button  onClick={signOut} style={parent1} p={8}>SIGN OUT</Button>
                      </PopoverBody>
                     <Button p={8} style={parent1}>HELP</Button>
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
    border-radius: 10px;
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
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  overflow:hidden;

  `
 const Logo = styled.img`
        width: 80px;
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
        width : 42px;
        height: 42px;
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
margin-right: 42px !important;

`
const UserTab = styled.div`
    overflow:visible;
`
