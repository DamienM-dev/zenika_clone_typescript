// IMPORT NEXTJS
import Image from "next/image";
import { useEffect, useState } from "react";

interface Expertise {
  id: number;
  logo: string;
  nom: string;
  alt: string;
}

// IMPORT LIBRAIRIE

// CSS SWIPER

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Expertise() {
  const TITREEXPERTISE = "Nos expertises";

  const [expertises, setExpertises] = useState<Expertise[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/expertises")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Donnée en chargement");
        }
        return response.json();
      })
      .then((data) => {
        setExpertises(data as Expertise[]);
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
    <div className="bg-greyColor py-2 pb-4 pt-10">
      <div className="h-64">
        <h2 className="mb-10 text-center text-2xl font-bold leading-10">
          {TITREEXPERTISE}
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
              slidesPerView: 8,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {expertises.map((expertise) => (
            <SwiperSlide key={expertise.id}>
              <div className="flex justify-center">
                <Image
                  src={expertise.logo}
                  alt={expertise.alt}
                  width={112}
                  height={112}
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semi-bold mt-6 h-7 text-center text-xl leading-7">
                {expertise.nom}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Expertise;
