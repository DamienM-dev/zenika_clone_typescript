function Video() {
  return (
    <article>
      <div className="dark:bg-bgDarkMode flex justify-center overflow-hidden p-4 md:px-40 md:pt-16">
        <iframe
          className="h-[759px] w-full max-w-[1576px] overflow-hidden rounded-xl"
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
    </article>
  );
}

export default Video;
