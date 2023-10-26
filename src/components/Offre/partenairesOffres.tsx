import Image from "next/image";
import { useEffect, useState } from "react";

interface Partenaire {
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

function PartenairesOffres() {
  const PARAGRAPHE =
    "Nous sommes en veille permanente sur les technologies qui vont influencer notre domaine dans les 3-5 ans à venir. Et nous y travaillons dès aujourd’hui avec nos partenaires.";
  const TITRE = "Nos partenaires";

  const [partenaires, setPartenaires] = useState<Partenaire[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/partenairesOffres")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur est inervenue pendant le chargement des données",
          );
        }
        return response.json();
      })
      .then((data) => {
        setPartenaires(data as Partenaire[]);
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
    <article className="partenaire dark:bg-bgDarModeLow bg-greyColor py-2 pb-4 pt-10 dark:text-white">
      <h2 className="mb-9 text-center text-2xl font-bold leading-10">
        {TITRE}
      </h2>
      <p className="px-8 pt-10 text-center text-xl leading-7">{PARAGRAPHE}</p>

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
        {partenaires.map((partenaire) => (
          <SwiperSlide key={partenaire.id}>
            <div className="flex justify-center ">
              <Image
                src={partenaire.image}
                alt={partenaire.alt}
                width={112}
                height={112}
                objectFit="cover"
                className="mt-10 h-[112px] w-[112px] rounded-full"
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

export default PartenairesOffres;
