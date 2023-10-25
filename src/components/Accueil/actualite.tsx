import Image from "next/image";
import { useState, useEffect } from "react";

interface Actualite {
  id: number;
  img: string;
  alt: string;
  titre: string;
  paragraphe: string;
  lien_decouvrir: string;
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
  const ARROWRIGHT = "/icone/arrowRight.png";
  const ALRARROWRIGHT = "Fléche de droite";

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
        setActualite(data as Actualite[]);
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
    <article className="px-2 py-10">
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
        breakpoints={{
          860: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1265: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper h-[500px]"
      >
        {actualites.map((actualite) => (
          <SwiperSlide key={actualite.id} className="h-card p-2">
            <ul className="relative mx-8 h-[450px] rounded-xl shadow-custom">
              {actualite.id && (
                <li>
                  <Image
                    src={actualite.img}
                    alt={actualite.alt}
                    height={246}
                    width={380}
                    layout="responsive"
                    objectFit="cover"
                    className="max-h-60 w-full rounded-t-xl"
                  />
                  <div className="m-4">
                    <div className="mb-4 text-base leading-5">
                      <h3 className="strong ">{actualite.titre}</h3>
                      <p className="font-nunito-light">
                        {actualite.paragraphe}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 flex justify-end p-4 ">
                    <a
                      className="flex justify-center"
                      href={actualite.lien_decouvrir}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <Image
                          src={ARROWRIGHT}
                          alt={ALRARROWRIGHT}
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                      </span>
                      <span className="uppercase text-pinkZenika">
                        Découvrir
                      </span>
                    </a>
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

export default Actualite;
