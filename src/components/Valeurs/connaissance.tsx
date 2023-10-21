import Image from "next/image";
import { useEffect, useState } from "react";

type Connaissance = {
  id: number;
  image: string;
  alt: string;
  titre: string;
  paragraphe: string;
};

// CSS SWIPER
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Connaissance() {
  const TITRE = "Partager les connaissances";
  const BACKGROUND = "./images/background-overlay.png";

  const [connaissances, setConnaissances] = useState<Connaissance[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/connaissances")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur est survenue pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setConnaissances(data as Connaissance[]);
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
    <article className="backgourndGradient ">
      <section className="px-4 py-12">
        <h3 className="pb-8 text-center text-2xl text-pinkTitre">{TITRE}</h3>
        <Swiper
          navigation={true}
          modules={[Navigation]}
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
          {connaissances.map((connaissance) => (
            <SwiperSlide key={connaissance.id}>
              <ul className="">
                <li className="mx-8">
                  <div className="flex h-60">
                    <Image
                      src={connaissance.image}
                      alt={connaissance.alt}
                      height={246}
                      width={380}
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-t-xl"
                    />
                  </div>
                  <div className=" h-52 rounded-b-xl bg-white p-4">
                    <h3>{connaissance.titre}</h3>
                    <p className="mb-4 font-nunito-light">
                      {connaissance.paragraphe}
                    </p>
                  </div>
                </li>
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </article>
  );
}

export default Connaissance;
