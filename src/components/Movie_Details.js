import React , {useEffect , useState , Component} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../features/firebase'
import movieSlice from '../features/movie/movieSlice';
import { selectResults } from '../features/apiSlice/apiSlice';
import { useSelector } from "react-redux";
import { setApi } from '../features/apiSlice/apiSlice';
import axios from 'axios';


function Movie_Details(props) {
    const Back_Url = "https://image.tmdb.org/t/p/original";
    const {id , media_type } = useParams();
    const [Movie, setMovie] = useState({});
    const tmdb_detail = useSelector(selectResults);
    console.log(props.key)
    //calling api
    console.log(media_type)
    const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        if(media_type == 'movie'){
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=21958744bdcd83994642863edf06f583`,
      )
      setData(result.data.logos[3]);
        }
        else{
            const result = await axios(
                `https://api.themoviedb.org/3/tv/${id}/images?api_key=21958744bdcd83994642863edf06f583`,
              );
              setData(result.data.logos[3]);
        }
    };

    fetchData();
  }, []);
const lp = data.file_path;
const logo_path = Back_Url + lp;
console.log(logo_path)
//  console.log(Back_Url +  data.logos[4].file_path)


     



   useEffect(()=>{
    for(let i=0;i<tmdb_detail.length ; i++){
        if(tmdb_detail[i].id == id){
            setMovie(tmdb_detail[i])
        }
    }
});

  return (
    <Container>
        <Background>
         <img src={Back_Url + Movie.backdrop_path }/>
        </Background>
        <TitleImage>
            <img src={logo_path} />
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
                <img src='https://disney-clone-woad.vercel.app/images/images/group-icon.png' />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            {Movie.subTitle}
        </SubTitle>
        <Description>
            {Movie.overview}
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
    margin-top:60px;
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
        max-width:760px;
        

`