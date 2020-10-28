import { HIWTemplateL, HIWTemplateR } from "../hiwTemplate";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const HIWDesktopRepresentative = () => {
  return (
    <div className="overflow-hidden w-full mx-auto hidden sm:block">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* VOICE */}
        <SwiperSlide>
          <HIWTemplateL
            mockupPath="./how-it-works/mockups/newPost.png"
            mainText="Start with a question."
            actionText="Ask the herd an agree or disagree question."
            resultText="Feedback from the community on what’s top of mind for you."
          />
        </SwiperSlide>
        {/* AMPLIFY */}
        <SwiperSlide>
          <HIWTemplateL
            mockupPath="./how-it-works/mockups/mail.png"
            mainText="Check-in with the Herd."
            actionText="Access synthesized reports on each question. Your feed is made of topics sent to you by your constituents and topics tagged to your committee."
            resultText="A new source of community-driven knowledge."
          />
        </SwiperSlide>
        {/* CONNECT */}
        <SwiperSlide>
          <HIWTemplateL
            mockupPath="./how-it-works/mockups/data.png"
            mainText="Represent."
            actionText="Reference Herd during voting and bill creation to make better, community-driven decisions."
            resultText="Stronger communities and a brighter future."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HIWDesktopRepresentative;
