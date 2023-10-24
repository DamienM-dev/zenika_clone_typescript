import Image from "next/image";
import { useEffect, useState } from "react";

interface PartenaireSecurite {
  id: number;
  image: string;
  alt: string;
  nom: string;
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
    <article className="centerSlider py-2 pb-4 pt-10">
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
        {partenaireSecurites.map((partenaireSecurite) => (
          <SwiperSlide key={partenaireSecurite.id}>
            <div></div>
            <a href={partenaireSecurite.lien}>
              <div className="flex justify-center">
                <Image
                  src={partenaireSecurite.image}
                  alt={partenaireSecurite.alt}
                  width={112}
                  height={112}
                  objectFit="cover"
                  className="mt-10 rounded-full"
                />
                <h3 className="font-semi-bold mt-6 h-7 text-center text-xl leading-7">
                  {partenaireSecurite.nom}
                </h3>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default PartenaireSecurite;
