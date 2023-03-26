import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel className="pt-14" {...settings} dots={true}>

      <Wrap className="hidden">
        <a className="lg:h-80 h-44  overflow-hidden hidden lg:block">
      <div className="-top-40 absolute -left-72 hidden lg:block">
      <iframe 
        className="lg:-top-56 "
        width="1920" height="790" src="https://www.youtube.com/embed/wtEWYpP-dWU?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className=" absolute left-0 -top-20   lg:hidden">
      <iframe 
        className=" "
        width="400" height="320" src="https://www.youtube.com/embed/wtEWYpP-dWU?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </a>
      </Wrap>



      <Wrap className="relative">
      <div className="absolute">
            <h1 className="text-4xl font-bold z-50 text-white text-left ml-10 mt-10">
              The Falcon and the Winter Soldier
            </h1>
          </div>
      <div
            className="absolute z-10 w-full h-full"
            style={{backgroundImage:
                "linear-gradient(90deg, rgb(3, 11, 23) 18.95%, rgba(5, 18, 29) 30.3%, rgba(9, 22, 34, 1) 42.3%, rgba(19, 34, 34, 0.79) 58.3% , rgba(19, 34, 34, 0.79) 66.3%, rgba(34, 34, 34, 0.2) 100%)",
                }}
          />
          
        <a className="lg:h-80 h-44 overflow-hidden absolute">
        
      
         
          <img 
          className="object-cover w-full h-full -z-50 "
          src="https://disney-clone-woad.vercel.app/images/images/slider-badging.jpg" alt="" />
       
        </a>
      </Wrap>
      <Wrap className="hidden">
      
        <a className="lg:h-80 h-44  overflow-hidden hidden lg:block">
    
      <div className="-top-40 absolute -left-72 hidden lg:block">

      <iframe 
        className="lg:-top-56 "
        width="1920" height="790" src="https://www.youtube.com/embed/wtEWYpP-dWU?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className=" absolute left-0 -top-20   lg:hidden">
      <iframe 
        className=" "
        width="400" height="320" src="https://www.youtube.com/embed/wtEWYpP-dWU?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </a>
      </Wrap>
   
      <Wrap>
        <a className="lg:h-80 h-44">
          <img 
          className="object-cover w-full h-full"
          src="https://disney-clone-woad.vercel.app/images/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap className="hidden">
        <a className="lg:h-80 h-44  overflow-hidden hidden lg:block">
      <div className="-top-40 absolute -left-72 hidden lg:block">
      <iframe 
        className="lg:-top-56 "
        width="1920" height="790" src="https://www.youtube.com/embed/wtEWYpP-dWU?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className=" absolute left-0 -top-20   lg:hidden">
      <iframe 
        className=" "
        width="400" height="320" src="https://www.youtube.com/embed/wtEWYpP-dWU?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </a>
      </Wrap>
    
      <Wrap>
        <a className="lg:h-80 h-44">
          <img 
          className="object-cover w-full h-full"
          src="https://disney-clone-woad.vercel.app/images/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
    }
  }
  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
     }
  }
  li.slick-active button:before {
    color: white;
  }
  
  .slick-next {
    // left: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
    cursor: pointer;
    position: relative;
    a {
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
            box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        }

    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration:300ms;

    }
    }

`;

export default ImgSlider;