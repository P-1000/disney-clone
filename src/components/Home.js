import React from 'react'
import styled from 'styled-components'
import ImgSlider from './HeroSlider';

function Home() {
  return (
    <Container>
      <ImgSlider/> 
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height : calc(100vh-70px);
  position:relative;
  padding: calc(3.5vw - 5px)
  overflow-x:hidden;


    &:before{
          background : url("./images/home-background.png") center center / cover no-repeat fixed;
          content : "";
          position : absolute;
          bottom : 0;
          z-index: -1;

    }

`;