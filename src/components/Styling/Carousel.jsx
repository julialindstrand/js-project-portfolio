import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel } from "swiper/modules";

export const Carousel = ({ data, renderItem }) => {
  return (
    <CarouselWrapper>
      <Swiper
        modules={[Scrollbar, Mousewheel]}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        spaceBetween={64}
        slidesPerView="auto"
        speed={700}
        freeMode={true}
        watchOverflow={false}
      >
        {/* {data.map((item, index) => (
          <SwiperSlide key={index} className="slide" tabIndex={0}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))} */}
      </Swiper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  margin-top: 62px;
  padding: 0 50px;
  overflow: visible;

  .swiper {
    padding-bottom: 70px;
  }

  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-slide {
    width: 400px !important;
    height: auto;
    display: flex;
  }

   .swiper-scrollbar {
    height: 12px;
    background: #e5e5e5;
    border-radius: 20px;
    margin: 32px auto 0;
    width: 80%;
    cursor: pointer;
  }

  .swiper-scrollbar-drag {
    background: red;
    border-radius: 20px;
    height: 100%;
    cursor: grab;
  }

  .swiper-scrollbar-drag:active {
    cursor: grabbing;
  }
  
  .swiper-slide {
    width: 300px !important;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
