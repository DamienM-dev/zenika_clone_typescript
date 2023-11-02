import Image from "next/image";
import { useEffect, useState } from "react";

type Communautes = {
  id: number;
  image: string;
  alt: string;
  titre: string;
  paragraphe: string;
};

// CSS SWIPER
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function Communaute() {
  const TITRE = "Soutenir les communautés";

  const [communautes, setCommunaute] = useState<Communautes[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/communautes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur est survenue pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setCommunaute(data as Communautes[]);
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
    <article className="partenaire dark:bg-bgDarkMode dark:text-white">
      <section className="px-4 py-12">
        <h3 className="pb-8 text-center text-2xl">{TITRE}</h3>
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
            className="mySwiper "
          >
            {communautes.map((communaute) => (
              <SwiperSlide key={communaute.id}>
                <ul className="mb-8 ">
                  <li className="mx-8 rounded-xl shadow-custom">
                    <div className="flex h-60">
                      <Image
                        src={communaute.image}
                        alt={communaute.alt}
                        height={246}
                        width={380}
                        layout="responsive"
                        objectFit="cover"
                        className="rounded-t-xl"
                      />
                    </div>
                    <div className=" h-52 rounded-b-xl bg-white p-4 dark:bg-bgDarkModeGrey">
                      <h3>{communaute.titre}</h3>
                      <p className="mb-4 font-nunito-light">
                        {communaute.paragraphe}
                      </p>
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

export default Communaute;
