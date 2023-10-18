// IMPORT REACT/NEXT

import Image from "next/image";
import { useState, useEffect } from "react";

interface Reference {
  id: number;
  img: string;
  alt: string;
  paragraphe: string;
  sous_titre: string;
  langage: string;
  lien_decouvrir: string;
  projet: string;
}

// IMPORT LIB

import DOMPurify from "dompurify";

// IMPORT SWIPRE

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Reference() {
  const [references, setReferences] = useState<Reference[]>([]);
  const [error, setError] = useState(null);

  const TITRE = "Nos références";

  useEffect(() => {
    fetch("/api/references")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Un problème est intervenu pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setReferences(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);
  return (
    <div className="px-10">
      <h2 className="leading-10b p-10 text-center text-2xl font-bold">
        {TITRE}
      </h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {references.map((reference) => (
          <SwiperSlide key={reference.id}>
            <div className="relative rounded-t-lg">
              <Image
                src={reference.img}
                alt={reference.alt}
                height={454}
                width={338}
                objectFit="cover"
                className="w-full rounded-t-lg"
              />
              <h3 className="absolute top-7 px-7 text-white">
                {reference.sous_titre}
              </h3>
            </div>
            <div className=" ">
              <div className="shadow-custom h-96 rounded-b-lg p-4">
                <h3>{reference.projet}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(reference.paragraphe),
                  }}
                  className="font-nunito-light"
                ></p>
                <h3>Expertises</h3>
                <p className="font-nunito-light">{reference.langage}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reference;
