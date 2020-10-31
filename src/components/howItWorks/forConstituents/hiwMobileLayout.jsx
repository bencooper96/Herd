import { HIWTemplateMobile } from "../hiwTemplate";
import { Swiper, SwiperSlide } from "swiper/react";

const HIWMobileConstituent = () => {
  return (
    <div className="overflow-hidden w-full mx-auto block sm:hidden">
      <Swiper spaceBetween={0} slidesPerView={1.2}>
        {/* VOICE */}
        <SwiperSlide>
          <HIWTemplateMobile
            mockupPath="./how-it-works/mockups/newPost.png"
            mainText="Start with a question."
            actionText="Ask the Herd an agree or disagree question using this form."
            resultText="Open, question-driven conversations that matter to the community."
          />
        </SwiperSlide>
        {/* AMPLIFY */}
        <SwiperSlide>
          <HIWTemplateMobile
            mockupPath="./how-it-works/mockups/feed.png"
            mainText="Answer questions."
            actionText="Read, vote, and comment pros and cons on your peers’ questions."
            resultText="A pool of answers from the community on issues that matter, quantified."
          />
        </SwiperSlide>
        {/* CONNECT */}
        <SwiperSlide>
          <HIWTemplateMobile
            mockupPath="./how-it-works/mockups/data.png"
            mainText="Learn from other people’s answers."
            actionText="Access synthesized reports on each question."
            resultText="A new source of community-driven knowledge for reps and constituents."
          />
        </SwiperSlide>
        {/* SEND */}
        <SwiperSlide>
          <HIWTemplateMobile
            mockupPath="./how-it-works/mockups/mail.png"
            mainText="Curate a feed for reps."
            actionText="If you want your rep to see a conversation, add it to their feed in one-tap. We do our part to match conversations the right reps, as well."
            resultText="Reps can easily access Herd reports and make community-informed decisions."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HIWMobileConstituent;
