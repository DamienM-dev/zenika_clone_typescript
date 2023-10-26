import Image from "next/image";
import { useEffect, useState } from "react";

interface PartenaireSecurite {
  id: number;
  image: string;
  alt: string;
  titre: string;
  lien: string;
}

// IMPORT LIBRAIRIE

import { Swiper, SwiperSlide } from "swiper/react";

// CSS SWIPER

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function PartenaireSecurite() {
  const TITRE = "Nos partenaires";

  const [partenaireSecurites, setPartenaireSecurites] = useState<
    PartenaireSecurite[]
  >([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/partenairesSecurites")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur est inervenue pendant le chargement des données",
          );
        }
        return response.json();
      })
      .then((data) => {
        setPartenaireSecurites(data as PartenaireSecurite[]);
      })
      .catch((err) => {
        console.error((err as Error).message);
        setError(err as null);
      });
  }, []);
  if (error) {
    return <div>Erreur : {error}</div>;
  }
  return (
    <article className="partenaire dark:bg-bgDarkMode bg-greyColor py-2 pb-4 pt-10 dark:text-white">
      <h2 className="mb-9 text-center text-2xl font-bold leading-10">
        {TITRE}
      </h2>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={2}
        breakpoints={{
          591: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          975: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1621: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {partenaireSecurites.map((partenaire) => (
          <SwiperSlide key={partenaire.id}>
            <div className="flex justify-center">
              <Image
                src={partenaire.image}
                alt={partenaire.alt}
                width={112}
                height={112}
                objectFit="cover"
                className="mt-10 rounded-full"
              />
            </div>
            <h3 className="font-semi-bold mt-6 h-7 text-center text-xl leading-7">
              {partenaire.titre}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default PartenaireSecurite;
