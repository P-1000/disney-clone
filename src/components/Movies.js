import React from 'react'
import styled from 'styled-components'


function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
        
`
const Content = styled.div`
        display:grid;
        gap:25px;
        grid-template-columns: repeat(4, minmax(0px, 1fr));
`
 const Wrap = styled.div`
        border-radius:10px;
        overflow:hidden;
        border:3px solid rgba(249,249,249,0.1);
        box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
        &:hover{
            transform : scale(1.04);
        border-color:rgba(249,249,249,0.8);
        transition:all 500ms cubic-bezier(0.2, 0.98, 0.95, 1.49) 0s;
        cursor:pointer;
        }
 `