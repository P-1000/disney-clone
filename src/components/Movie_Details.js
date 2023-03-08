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
                    <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src='./images/group-icon.png' />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018 * 7m * Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
        Marvel Studios’ “The Falcon and The Winter Soldier” stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of “Avengers: Endgame,” team up on a global adventure that tests their abilities—and their patience.
        </Description>
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
        align-items:center;

`

const PlayButton = styled.button`
        border-radius:4px;
        font-size:15px;
        padding:0px 24px;
        margin-right:22px;
        display:flex;
        align-items:center;
        height:56px;
        background:rgb(249,249,249);
        border:none;
        letter-spacing:1.8px;
        pointer:cursor;
        
        &:hover{
            background:rgb(198,198,198);
        }

`

const TrailerButton = styled(PlayButton)`
    border:1px solid rbg(249,249,249);
    background:rgba(0,0,0,0.3);
    color:rgb(249,249,249);
    text-transform:uppercase;
`

const AddButton = styled.button`
        margin-right:16px;
        width:44px;
        height:44px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        border:2px solid white;
        background-color:rgba(0,0,0,0.6);
        cursor:pointer;
        margin-right:16px;
        span{
            font-size:30px;
            color:white;
        }
        
`

const GroupWatchButton = styled(AddButton)`
        background:rgb(0,0,0);

`

const SubTitle = styled.div`
        margin-top:26px;
        color:rgb(249,249,249);
        font-size:15px;
        min-height:20px;
        

`

const Description = styled.div`
        line-height:1.4;
        font-size:20px;
        margin-top:16px;
        color:rgb(249,249,249);
        
`