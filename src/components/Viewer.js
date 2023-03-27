import React from 'react'
import styled from 'styled-components'

function Viewer() {
  return (
    <Container>
      <Warp>
            <img src='./images/viewers-disney.png'/>
      </Warp>
      <Warp>
            <img src='./images/viewers-pixar.png'/>
      </Warp>
      <Warp>
            <img src='./images/viewers-marvel.png'/>
      </Warp>
      <Warp>
            <img src='./images/viewers-starwars.png'/>
      </Warp>
      <Sprd>
      <Warp className='hidden lg:block'>
            <img src='./images/viewers-national.png'/>
      </Warp>
      </Sprd>
    </Container>
  )
}

export default Viewer

const Container = styled.div`
    margin-top:30px;
    display:grid;
    grid-template-columns: repeat(5,minmax(0,1fr));
    gap:25px;
    padding:30px 0 26px;
    @media only screen and (max-width: 479px){
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap:5px;
  margin-top:10px;
  
}

@media only screen and (min-width: 480px) and (max-width: 768px){
      grid-template-columns: repeat(2,minmax(0,2fr));
}
`
const Sprd = styled.div`
       @media only screen and (min-width: 480px) and (max-width: 768px){
     grid-column:span 2;
}
`

const Warp = styled.div`
    border:3px solid rgba(249,249,249,0.1);
    border-radius:10px;
    cursor:pointer;
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    @media only screen and (max-width: 479px){
      border-radius:4px;
  border:1px solid rgba(249,249,249,0.1);
}
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        transform : scale(1.05);
        border-color:rgba(249,249,249,0.8);
        transition:all 500ms cubic-bezier(0.2, 0.98, 0.95, 1.49) 0s;
    }
`