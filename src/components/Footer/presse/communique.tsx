import { useEffect, useState } from "react";

// IMPORT SWIPRE

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import DOMPurify from "dompurify";

function Communique() {
  type Communique = {
    id: number;
    image: string;
    alt: string;
    titre: string;
    paragraphe: string;
    lien: string;
  };
  const TITRE = "Communiqués et revue de Presse";
  const ARROWRIGHT = "/icone/arrowRight.png";
  const ALRARROWRIGHT = "Fléche de droite";

  const [communiques, setCommunique] = useState<Communique[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/communiques")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur est survenue pendant le chargement de communique",
          );
        }
        return response.json();
      })
      .then((data) => {
        setCommunique(data as Communique[]);
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
    <article className="backgourndGradient px-2 pb-12 pt-10">
      <h2 className="p-10 text-center text-2xl font-bold leading-10 text-pinkTitre">
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
        {communiques.map((communique) => (
          <SwiperSlide key={communique.id} className=" p-2">
            <ul className="mx-8 rounded-xl shadow-custom ">
              {communique.id && (
                <li className=" mb-10 overflow-hidden rounded-lg bg-white dark:bg-bgDarkModeGrey dark:text-white lg:flex lg:h-[500px]">
                  <div className="  relative h-[308px] lg:h-[500px] lg:w-1/2">
                    <Image
                      src={communique.image}
                      alt={communique.alt}
                      layout="fill"
                      objectFit="cover"
                      className="!h-full  w-full lg:max-h-full lg:rounded-tr-none"
                    />
                  </div>

                  <div className="relative m-4 lg:h-[490px] lg:w-1/2">
                    <div className="mb-4 px-4 pb-6 pt-4 text-base leading-5 lg:p-4">
                      <h3 className="p-4 ">{communique.titre}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(communique.paragraphe),
                        }}
                        className="mb-4 font-nunito-light"
                      ></p>
                    </div>
                    {communique.lien ? (
                      <div className="absolute bottom-0 right-0 p-2">
                        <a
                          className="flex justify-end"
                          href={communique.lien}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>
                            <Image
                              src={ARROWRIGHT}
                              alt={ALRARROWRIGHT}
                              width={24}
                              height={24}
                              className=" mr-2"
                            />
                          </span>
                          <span className="uppercase text-pinkZenika">
                            Découvrir
                          </span>
                        </a>
                      </div>
                    ) : null}
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

export default Communique;
