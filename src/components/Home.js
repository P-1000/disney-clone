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
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  display: block;
  &:before {
    background: url("/images/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`