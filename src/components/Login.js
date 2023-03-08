import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
        galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" /> 
        </CTA>

    </Container>

  )
}

export default Login

const Container = styled.div`
opacity: .8;
background-image: url("./images/login-background.jpg");
background-position: top;
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
width: 100%;
position : relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
height: 100%;
background-position: top;
background-size: cover;
position: absolute;
top: 0;
right: 0;
left: 0;
background-repeat: no-repeat;
z-index: -1;   
  }
`

const CTA = styled.div`
    max-width: 650px;
    padding : 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    
`

const SignUp = styled.a`
        width: 100%;
        background-color: #0063e5;
        font- weight: bold;
        padding: 17px 0;
        color: #f9f9f9;
        border-radius: 4px;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
        transition: all 250ms;
        letter-spacing: 1.5px;
        margin-top: 8px;

        &:hover {
            background: #0483ee;
        }
`


const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`

const CTALogoTwo = styled.img`
    width: 90%;

`