import React from 'react'
import styled from 'styled-components'

function Movie_Details() {
  return (
    <Container>
        <Background>
         <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg ' />
        </Background>
        <TitleImage>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A67A42FB16607DAE7E22266D3F00181965178ED1884047C2D982EE7D89D3554/scale?width=1440&aspectRatio=1.78' />
        </TitleImage>
        <Controls>
            <PlayButton>
                <img src='./images/play-icon-black.png' />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
            <img src='./images/play-icon-white.png' />
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>

            </AddButton>
            <GroupWatchButton>
                 
            </GroupWatchButton>
        </Controls>
    </Container>
  )
}

export default Movie_Details

const Container = styled.div`
            position: relative;
            min-height: calc(100vh - 70px);
            padding: 0 calc(3.5vw + 5px);
           
`

const Background = styled.div`
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
        opacity:0.8;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }

`

const TitleImage = styled.div`
    height:30vh;
    width:35vw;
    min-height:170px;
    min-width:200px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;

    }
`

const Controls = styled.div `
        display:flex;
`

const PlayButton = styled.button`
        border-radius:4px;
        font-size:15px;
        padding:0px 24px;
        margin-right:22px;
        display:flex;
        align-items:center;
        height:5 6px;
        background:rbg(249,249,249);
        border:none;
        letter-spacing:1.8px;
        cursor :pointer;
        
        &:hover{
            background: rbg(198,198,198);
        }

`

const TrailerButton = styled.button`

`

const GroupWatchButton = styled.button`

`

const AddButton = styled.button`

`