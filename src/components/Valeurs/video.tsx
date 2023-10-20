function Video() {
  return (
    <div>
      <div className="aspect-w-16 aspect-h-9overflow-hidden p-4">
        <iframe
          className="h-[759px] w-full rounded-lg"
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
    </div>
  );
}

export default Video;
