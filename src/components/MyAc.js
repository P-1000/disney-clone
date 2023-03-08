import React from 'react'
import styled from 'styled-components'
import { Center, Container, Image, Text,Box} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter ,Flex } from '@chakra-ui/react'
import { selectUserName  , selectUserPhoto , setUserLogin, setUserLoginDetails , setSignOut} from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux' 

function MyAc() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);   
    const userPhoto = useSelector(selectUserPhoto);
  return (
    <>
          <Center h="100vh" >
          <Container>
          <Box>
            <Image src={userPhoto} alt="Avatar" borderRadius="50%" boxSize="150px" mb="4" />
            <Text fontSize="2xl" fontWeight="bold">{userName}</Text>
          </Box>
      
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="xl" fontWeight="semibold" color="teal.600">
          View Transactions
          </Text>
        </Box>
        <Text mt="2" color="gray.500">
        Account Settings        </Text>
        <Text mt="2" color="gray.500">
        Log Out        </Text>
      </Box>
      
    </Box>
      </Container>
    </Center>
    </>
  )
}

export default MyAc

