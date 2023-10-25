// IMPORT REACT/NEXT

import Image from "next/image";
import { useState, useEffect } from "react";

interface CyberSecurite {
  id: number;
  img: string;
  alt: string;
  paragraphe: string;
  titre: string;
  langage: string;
}

// IMPORT LIB

// IMPORT SWIPRE

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function CyberSecurite() {
  const EXPERTISE = "Expertises";
  const PROJET = "Le projet";

  const [cyberSecurites, setCyberSecurites] = useState<CyberSecurite[]>([]);
  const [error, setError] = useState(null);

  const TITRE = "Parmi nos références en cybersécurité";

  useEffect(() => {
    fetch("/api/cyberSecurites")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Un problème est intervenu pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setCyberSecurites(data as CyberSecurite[]);
      })
      .catch((err) => {
        console.log((err as Error).message);
        setError(err as null);
      });
  }, []);
  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <article className="px-2 pb-12 pt-10">
      <h2 className="leading-10b p-10 text-center text-2xl font-bold">
        {TITRE}
      </h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        breakpoints={{
          1170: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {cyberSecurites.map((cyberSecurite) => (
          <SwiperSlide key={cyberSecurite.id} className=" p-2">
            <ul className="mx-8 rounded-xl shadow-custom ">
              {cyberSecurite.id && (
                <li className="mb-10 lg:flex lg:h-[500px]">
                  <div className="relative h-[308px] lg:h-[500px] lg:w-1/2">
                    <Image
                      src={cyberSecurite.img}
                      alt={cyberSecurite.alt}
                      layout="fill"
                      objectFit="cover"
                      className="!h-full w-full rounded-t-xl rounded-bl-xl lg:max-h-full lg:rounded-tr-none"
                    />
                    <h3 className="absolute top-0 p-4 text-white">
                      {cyberSecurite.titre}
                    </h3>
                  </div>

                  <div className="relative m-4 lg:h-[490px] lg:w-1/2">
                    <div className="mb-4 px-4 pb-6 pt-4 text-base leading-5 lg:p-4">
                      <h3 className="strong ">{PROJET}</h3>
                      <p className="mb-4 font-nunito-light">
                        {cyberSecurite.paragraphe}{" "}
                      </p>

                      <h3>{EXPERTISE}</h3>
                      <p className="font-nunito-light">
                        {cyberSecurite.langage}
                      </p>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default CyberSecurite;
