import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Classes from "./carousel.module.css";

const carouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
      >
        {img.map((imageItemLink ) => {
          return <img src={imageItemLink} alt="carousel" />;
        })}
      </Carousel>
      <div className={Classes.hero_img}></div>
    </div>
  );
};

export default carouselEffect;
