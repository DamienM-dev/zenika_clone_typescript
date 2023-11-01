import Link from "next/link";
import React, { useEffect, useRef } from "react";

const importLottie = () => {
  import("@lottiefiles/lottie-player");
};

interface LottiePlayerProps {
  src: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ src }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    importLottie();
  }, []);

  return (
    <article className="flex h-screen w-screen bg-pinkZenika dark:bg-bgDarModeLow">
      <div className="m-auto">
        <h1 className="text-2xl text-bgDarModeLow dark:text-pinkTitre">
          Vous vous êtes perdu en chemin ?
        </h1>
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src={src}
          style={{ width: "300px", height: "auto" }}
        ></lottie-player>
        <div className="mx-auto mt-10 w-36 rounded border  bg-pinkTitre p-5 text-center text-bgDarkMode hover:bg-bgDarkMode hover:text-pinkTitre   dark:border-pinkTitre">
          <Link href="/" className="">
            Suivez-moi !
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Home() {
  return <LottiePlayer src="/images/walk.json" />;
}
