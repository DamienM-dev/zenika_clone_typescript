function Video() {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SWHK2MkU_xE?si=FF_50TcP2CDG6Toe"
        title="YouTube video player"
        allow="accelerometer; 
    autoplay; 
    clipboard-write; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture; 
    web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
