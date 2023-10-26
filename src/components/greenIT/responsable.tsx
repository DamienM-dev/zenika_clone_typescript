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

function Responsable() {
  type Responsable = {
    id: number;
    image: string;
    alt: string;
    titre: string;
    paragraphe: string;
    lien: string;
  };
  const TITRE = "Encourager le Numérique responsable";
  const ARROWRIGHT = "/icone/arrowRight.png";
  const ALRARROWRIGHT = "Fléche de droite";

  const [responsables, setResposable] = useState<Responsable[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/responsables")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur est survenue pendant le chargement de responsable",
          );
        }
        return response.json();
      })
      .then((data) => {
        setResposable(data as Responsable[]);
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
    <article className="backgourndGradientGreen px-10">
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
        {responsables.map((responsable) => (
          <SwiperSlide key={responsable.id} className=" p-2">
            <ul className="dark:bg-bgDarkModeGrey relative mx-8 rounded-xl bg-white shadow-custom dark:text-white">
              {responsable.id && (
                <li className="mb-10 lg:flex lg:h-[500px] ">
                  <div className=" lg:w-1/2">
                    <Image
                      src={responsable.image}
                      alt={responsable.alt}
                      height={246}
                      width={380}
                      layout="responsive"
                      objectFit="cover"
                      className="max-h-60 w-full rounded-t-xl lg:!h-full lg:max-h-full lg:rounded-tr-none"
                    />
                  </div>

                  <div className="m-4 h-96 lg:w-1/2">
                    <div className="px-4">
                      <h3 className=" p-4">{responsable.titre}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(responsable.paragraphe),
                        }}
                        className="font-nunito-light"
                      ></p>
                    </div>

                    {responsable.lien ? (
                      <div className="absolute bottom-0 right-0 p-2">
                        <a
                          className="flex justify-end"
                          href={responsable.lien}
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

export default Responsable;
