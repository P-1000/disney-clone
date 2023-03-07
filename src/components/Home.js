import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      home 

      
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height : calc(100vh-70px);
  positon:relative;
  padding: calcu(3.5vw - 5px)
  display:block;
  overflow-x:hidden;


    &:before{
          background : url("./images/home-background.png") center center / cover no-repeat fixed;
          content : "";
          position : absolute;
          inset:0px;
          bottom : 0;
          z-index:-1;

    }

`;