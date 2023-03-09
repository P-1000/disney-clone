import React from 'react'
import styled from 'styled-components'
import { Center, Container, Image, Text,Box} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter ,Flex } from '@chakra-ui/react'
import { selectUserName  , selectUserPhoto , setUserLogin, setUserLoginDetails , setSignOut} from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux' 
import {auth , provider} from '../features/firebase'
import {useHistory} from 'react-router-dom'



function MyAc() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);   
    const userPhoto = useSelector(selectUserPhoto);
    const history = useHistory();
    const breakpoints = {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    }

  return (


    <>
          <Center h="100vh" >
          <Container   height={{
      base: '100%', // 0-48em
      md: '50%', // 48em-80em,
      xl: '25%', // 80em+
    }}>
          <Center>
          <Box>
            <Image src={userPhoto} ml="36px"  alt="Avatar" borderRadius="50%" boxSize="120px" />
            <Center>
            <Text fontSize="1.4em" textTransform="uppercase"  fontWeight="bold">{userName}</Text>
            </Center>
          </Box>
          </Center>
        <Box className='cont' >
          <Box  className='cards112' d="flex "  rowGap="5" alignItems="center" background="#192133" p="10px 10px 12px 12px" w="340px"  maxW="540px" mb="12px">
        <Box  wwidth={[1, 1 / 2, 1 / 4]}>
          <Text fontSize="xl" fontWeight="semibold" >
          Get more with Disney+ Hotstar Premium
          <span d="block">Only ₹399/year</span>
          </Text>
            <Text fontSize="sm" color="#8D8D8D" >
            Only ₹399/year
            </Text>
          </Box>
          
          <center>
          <Box background="#1f80e0" py="4px" >
                <Text>
                Subscribe to watch all content 
                </Text>  
                </Box>
                </center>
                </Box>

      
      <Box p="12" >
        <Box  className='cards11' d="flex "  rowGap="5" alignItems="center" background="#192133" p="10px 10px 12px 12px" maxW="340px" mb="12px" w="980px">
          <Text fontSize="xl" fontWeight="semibold" >
          View Transactions
          </Text>
          <img src="https://img.icons8.com/sf-ultralight-filled/25/000000/chevron-right.png"/>    
        </Box>
                     <Box  className='cards11' d="flex "  rowGap="5" alignItems="center" background="#192133" p="10px 10px 12px 12px" maxW="340px" mb="12px" w="980px">
        <Text fontSize="xl" fontWeight="semibold" color="teal.600">       
                 Account Settings 
          </Text>
          <img src="https://img.icons8.com/sf-ultralight-filled/25/000000/chevron-right.png"/>    

        </Box>
       <Box onClick={()=>{
        auth.signOut().then(()=>{
            dispatch(setSignOut())
            history.push('/login')
        })
       }}
          className='cards11' d="flex "  rowGap="5" alignItems="center" background="#192133" p="10px 10px 12px 12px" maxW="340px" mb="12px" w="980px">
        <Text fontSize="xl" fontWeight="semibold" color="teal.600">
                Log Out   
         </Text>
         <img src="https://img.icons8.com/sf-ultralight-filled/25/000000/chevron-right.png"/>    

        </Box>

      </Box>
      </Box>
    
      </Container>
    </Center>
    </>
  )
}

export default MyAc

