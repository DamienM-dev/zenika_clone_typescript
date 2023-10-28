// IMPORT REACT/NEXT

import Image from "next/image";
import { useState, useEffect } from "react";

interface Reference {
  id: number;
  img: string;
  alt: string;
  paragraphe: string;
  sous_titre: string;
  langage: string;
  lien_decouvrir: string;
  projet: string;
}

// IMPORT LIB

import DOMPurify from "dompurify";

// IMPORT SWIPRE

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Reference() {
  const [references, setReferences] = useState<Reference[]>([]);
  const [error, setError] = useState(null);

  const TITRE = "Nos références";
  const ARROWRIGHT = "/icone/arrowRight.png";
  const ALRARROWRIGHT = "Fléche de droite";

  useEffect(() => {
    fetch("/api/references")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Un problème est intervenu pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setReferences(data as Reference[]);
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
      <h2 className="p-10 text-center text-2xl font-bold leading-10">
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
        {references.map((reference) => (
          <SwiperSlide key={reference.id} className=" p-2">
            <ul className="mx-8 rounded-xl shadow-custom ">
              {reference.id && (
                <li className="mb-10 dark:bg-bgDarkModeGrey lg:flex lg:h-[500px]">
                  <div className="relative h-[308px] lg:h-[500px] lg:w-1/2">
                    <Image
                      src={reference.img}
                      alt={reference.alt}
                      layout="fill"
                      objectFit="cover"
                      className="!h-full w-full rounded-t-xl lg:max-h-full lg:rounded-tr-none"
                    />
                    <h3 className="absolute top-0 p-4 text-white">
                      {reference.sous_titre}
                    </h3>
                  </div>

                  <div className="relative m-4 lg:h-[490px] lg:w-1/2">
                    <div className="mb-4 px-4 pb-6 pt-4 text-base leading-5 lg:p-4">
                      <h3 className="strong ">{reference.projet}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(reference.paragraphe),
                        }}
                        className="mb-4 font-nunito-light"
                      ></p>
                      {reference.langage ? (
                        <>
                          <h3>Expertises</h3>
                          <p className="font-nunito-light">
                            {reference.langage}
                          </p>
                        </>
                      ) : null}
                    </div>
                    {reference.lien_decouvrir ? (
                      <div className="absolute bottom-0 right-0 p-2">
                        <a
                          className="flex justify-end"
                          href={reference.lien_decouvrir}
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

export default Reference;
