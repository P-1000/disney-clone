import React, { useEffect } from 'react';

function Md(props) {
  useEffect(() => {
    function enterFullScreen() {
      // const video = document.getElementById('videoIframe');
      
      // if (video.requestFullscreen) {
      //   video.requestFullscreen();
      // } else if (video.mozRequestFullScreen) {
      //   video.mozRequestFullScreen();
      // } else if (video.webkitRequestFullScreen) {
      //   video.webkitRequestFullScreen();
      // }
    }

    enterFullScreen();
  }, []);

  const { match } = props;

  return (
    <div className="page top-20 static pt-14 w-full">
      <div className='absolute w-full'>
        <div>
          <iframe id="videoIframe"
            width="100%"
            height="100%"
            allowFullScreen
            src={`https://vidsrc.to/embed/movie/${match}`}
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Md;
