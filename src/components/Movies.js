import React from 'react'
import styled from 'styled-components'
import {selectMovies} from '../features/movie/movieSlice'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

function Movies() {
  const movies = useSelector(selectMovies);
  console.log("this is movies" ,movies)


    return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {
          movies && movies.map((movie)=>(
            <Wrap key={movie.id}>
              <Link to={`/movie_details/${movie.id}`}>
                <img src={movie.cardImg}/>
              </Link>
            </Wrap>
          ))
        }
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

        @media only screen and (max-width: 479px){
  grid-template-columns: repeat(2,minmax(0,1fr));
  
}

@media only screen and (min-width: 480px) and (max-width: 768px){
      grid-template-columns: repeat(3,minmax(0,2fr));
}
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