import Image from "next/image";
import { useState, useEffect } from "react";

interface Actualite {
  id: number;
  img: string;
  alt: string;
  titre: string;
  paragraphe: string;
}

// IMPORT SWIPRE

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Actualite() {
  const TITRE = "Nos actualités et événements";

  const [actualites, setActualite] = useState<Actualite[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/actualites")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur esr survenue lors du téléchargement des actualités",
          );
        }
        return response.json();
      })
      .then((data) => {
        setActualite(data);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
      });
  }, []);

  return (
    <div className="px-2 py-10">
      <h2 className="my-9 text-center text-2xl font-bold leading-10">
        {TITRE}
      </h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {actualites.map((actualite) => (
          <SwiperSlide key={actualite.id} className="h-card shadow-custom p-2">
            {actualite.id && (
              <div className="mx-8">
                <Image
                  src={actualite.img}
                  alt={actualite.alt}
                  height={246}
                  width={380}
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="m-4">
                  <div className="mb-4 text-base leading-5">
                    <h3 className="strong ">{actualite.titre}</h3>
                    <p className="font-nunito-light">{actualite.paragraphe}</p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Actualite;
