import Image from "next/image";
import { useEffect, useState } from "react";

type Paroles = {
  id: number;
  image: string;
  alt: string;
  paragraphe: string;
  lien: string;
};

// CSS SWIPER
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function Parole() {
  const TITRE = "Les experts en cybersécurité prennent la parole";
  const ARROWRIGHT = "/icone/arrowRight.png";
  const ALRARROWRIGHT = "Fléche de droite";

  const [paroles, setParole] = useState<Paroles[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/paroles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur est survenue pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setParole(data as Paroles[]);
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
    <article className="centerSliderParole backgourndGradient">
      <section className="px-4 pb-12 pt-10 sm:px-10">
        <h3 className="pb-8 text-center text-2xl text-pinkTitre">{TITRE}</h3>
        <div className="mx-auto w-full">
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            breakpoints={{
              866: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1290: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1700: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            className="mySwiper"
          >
            {paroles.map((parole) => (
              <SwiperSlide key={parole.id}>
                <ul className="relative mb-8">
                  <li className="relative mx-8 rounded-xl shadow-custom">
                    <div className="flex h-60">
                      <Image
                        src={parole.image}
                        alt={parole.alt}
                        height={246}
                        width={380}
                        layout="responsive"
                        objectFit="cover"
                        className="rounded-t-xl"
                      />
                    </div>
                    <div className=" h-52 rounded-b-xl bg-white p-4">
                      <p className="mb-4 font-nunito-light">
                        {parole.paragraphe}
                      </p>

                      <div className="absolute bottom-0 right-0 p-2">
                        <a
                          className="flex justify-end"
                          href={parole.lien}
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
                    </div>
                  </li>
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </article>
  );
}

export default Parole;
