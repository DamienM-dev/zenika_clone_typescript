import { useEffect, useState } from "react";

// IMPORT SWIPRE

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

type Diversity = {
  id: number;
  image: string;
  alt: string;
  titre: string;
  paragraphe: string;
  lien: string;
};

function Diversity() {
  const TITRE = "Z Diversity";
  const ARROWRIGHT = "/icone/arrowRight.png";
  const ALRARROWRIGHT = "Fléche de droite";

  const [diversities, setDiversities] = useState<Diversity[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/diversity")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur est survenue pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setDiversities(data as Diversity[]);
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
    <article className="bg-greyColor px-2 pb-12 pt-10 dark:bg-bgDarModeLow">
      <h2 className="my-9 text-center text-2xl font-bold leading-10 dark:text-white">
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
        className="mySwiper "
      >
        {diversities.map((diversity) => (
          <SwiperSlide key={diversity.id} className="h-card p-2">
            <ul className="relative mx-8 mb-10 h-[500px] min-w-[320px] rounded-xl shadow-custom dark:bg-bgDarkModeGrey">
              {diversity.id && (
                <li className=" dark:text-white lg:flex lg:h-full">
                  <div className="lg:w-1/2">
                    <Image
                      src={diversity.image}
                      alt={diversity.alt}
                      height={246}
                      width={380}
                      layout="responsive"
                      objectFit="cover"
                      className="max-h-60 w-full rounded-t-xl lg:!h-full lg:max-h-full lg:rounded-tr-none"
                    />
                  </div>

                  <div className="lg:w-1/2">
                    <div className="m-4">
                      <div className="mb-4 text-base leading-5">
                        <h3 className="strong ">{diversity.titre}</h3>
                        <p className="pt-2 font-nunito-light">
                          {diversity.paragraphe}
                        </p>
                      </div>
                    </div>
                    {diversity.lien ? (
                      <div className="absolute bottom-0 end-0 p-2">
                        <a
                          className="flex justify-end"
                          href={diversity.lien}
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

export default Diversity;
