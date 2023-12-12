import { Image } from "@nextui-org/react";
import CardAboutus from "./CardAboutus";
import HeroMainPage from "./HeroMainPage";

export default function Kuy() {
  return (
    <>
      <HeroMainPage />
      <CardAboutus />
      <div className="carousel">
        <Image
          src="https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg"
          alt="Image 1"
          width={500}
          height={300}
        />
        <Image
          src="https://static.wikia.nocookie.net/weakhero/images/9/99/Yeon.png/revision/latest/scale-to-width-down/670?cb=20200130015457"
          alt="Image 3"
          width={500}
          height={300}
        />
        <Image
          src="https://static.wikia.nocookie.net/weakhero/images/9/99/Yeon.png/revision/latest/scale-to-width-down/670?cb=20200130015457"
          alt="Image 2"
          width={500}
          height={300}
        />
      </div>
    </>
  );
}
