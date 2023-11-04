import React, { useEffect } from 'react';

function Md() {
  useEffect(() => {
    function enterFullScreen() {
      const video = document.getElementById('videoIframe');
      
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      }
    }

    enterFullScreen();
  }, []);

  return (
    <div className="page top-20 static pt-14">
      <div className='absolute'>
        <div>
          <iframe
            id="videoIframe"
            width="100%"
            src={`https://vidsrc.to/embed/movie/927085`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Md;
