import { Swiper, SwiperSlide } from "swiper/react";

type Usage = {
  id: number;
  image: string;
  alt: string;
  paragraphe: string;
  titre: string;
  lien: string;
};

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";

function Usage() {
  const [usages, setUsages] = useState<Usage[]>([]);
  const [error, setError] = useState(null);

  const TITRE = "Cas d'usage";
  const ARROWRIGHT = "/icone/arrowRight.png";
  const ALRARROWRIGHT = "Fléche de droite";

  useEffect(() => {
    fetch("/api/usages")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Un problème est intervenu pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setUsages(data as Usage[]);
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
    <article className="centerSliderParole px-2 pb-12 pt-10">
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
        {usages.map((usage) => (
          <SwiperSlide key={usage.id} className=" p-2">
            <ul className="mx-8 rounded-xl shadow-custom ">
              {usage.id && (
                <li className="mb-10 dark:bg-bgDarkModeGrey lg:flex lg:h-[500px]">
                  <div className="relative h-[308px] lg:h-[500px] lg:w-1/2">
                    <Image
                      src={usage.image}
                      alt={usage.alt}
                      layout="fill"
                      objectFit="cover"
                      className="!h-full w-full rounded-t-xl lg:max-h-full lg:rounded-tr-none"
                    />
                    {/* ---------- Je change de couleurs car l'arrière plan de la card est blanche donc le titre ne se voit pas ---------- */}
                    <h3
                      className={`absolute top-0 p-4 ${
                        usage.titre ===
                        "Créer une application au service de la marque"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {usage.titre}
                    </h3>
                  </div>

                  <div className="relative m-4 lg:h-[490px] lg:w-1/2">
                    <div className="mb-4 px-4 pb-6 pt-4 text-base leading-5 lg:p-4">
                      <p className="mb-4 font-nunito-light">
                        {usage.paragraphe}
                      </p>
                    </div>
                    {usage.lien ? (
                      <div className="absolute bottom-0 right-0 p-2">
                        <a
                          className="flex justify-end"
                          href={usage.lien}
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

export default Usage;
