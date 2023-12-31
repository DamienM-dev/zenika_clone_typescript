import { FallingLines } from "react-loader-spinner";

import Image from "next/image";

interface Carrousel {
  id: number;
  img: string;
  alt: string;
}
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const TITLEPRINCIPAL = "Le lien entre le monde organique et le monde numérique";
const PARAGRAPHECARROUSEL =
  "Nous accompagnons les entreprises dans leur transformation numérique : Conseil, formation et réalisation IT";

function CarrouselsPage() {
  const [carrousels, setCarrousels] = useState<Carrousel[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/carrousels")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Données en chargement");
        }
        return response.json();
      })
      .then((data) => {
        setCarrousels(data as Carrousel[]);
        setLoading(false);
      })
      .catch((err) => {
        console.error((err as Error).message);
        setError(err as null);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FallingLines color="#DF2147" width={"100"} visible={true} />;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <article className="mx-8 gap-x-4 lg:grid lg:h-[800px] lg:grid-cols-2">
      <div className="flex h-full items-center justify-center lg:px-8 lg:pt-8">
        <div className="mt-10 max-w-3xl ">
          <h1 className="mt-10  text-4xl font-bold leading-10">
            {TITLEPRINCIPAL}
          </h1>
          <div className="my-5">
            <p className=" font-nunito-light text-xl leading-6">
              {PARAGRAPHECARROUSEL}
            </p>
          </div>
        </div>
      </div>

      <div className="h-full px-8 pb-8 lg:flex lg:items-center lg:justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper max-w-xl lg:px-8"
        >
          {carrousels.map((carrousel) => (
            <SwiperSlide key={carrousel.id}>
              {carrousel.id && (
                <div>
                  <Image
                    src={carrousel.img}
                    alt={carrousel.alt}
                    height={200}
                    width={200}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
}

export default CarrouselsPage;
