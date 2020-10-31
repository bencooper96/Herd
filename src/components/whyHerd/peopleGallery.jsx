import React from "react";
import { ProfileCard, ProfileCardMobile } from "./profileCard";
import { Swiper, SwiperSlide } from "swiper/react";

const PeopleGallery = () => {
  return (
    <React.Fragment>
      <div className="flex mt-10 mx-auto w-11/12 bg-primary p-5 hidden sm:block">
        <ProfileCard
          headshot="https://picsum.photos/200/200"
          name="First Name"
          quote="I use Herd as a way to make my voice heard. I know that my
  representatives use this information to make their decisions"
        />
        <ProfileCard
          headshot="https://picsum.photos/200/201"
          name="First Name"
          quote="I use Herd as a way to make my voice heard. I know that my
  representatives use this information to make their decisions"
        />
        <ProfileCard
          headshot="https://picsum.photos/201/200"
          name="First Name"
          quote="I use Herd as a way to make my voice heard. I know that my
  representatives use this information to make their decisions"
        />
      </div>
      {/* ------Mobile------ */}
      <div className="flex mt-10 mx-auto w-11/12 p-2 sm:hidden">
        <Swiper spaceBetween={20} slidesPerView={1.1}>
          {/* Person 1 */}
          <SwiperSlide>
            <ProfileCardMobile
              headshot="https://picsum.photos/256/256"
              name="First Name"
              quote="I use Herd as a way to make my voice heard. I know that my
  representatives use this information to make their decisions"
            />
          </SwiperSlide>

          {/* Person 2 */}
          <SwiperSlide>
            <ProfileCardMobile
              headshot="https://picsum.photos/256/256"
              name="First Name"
              quote="I use Herd as a way to make my voice heard. I know that my
  representatives use this information to make their decisions"
            />
          </SwiperSlide>

          {/* Person 3 */}
          <SwiperSlide>
            <ProfileCardMobile
              headshot="https://picsum.photos/256/256"
              name="First Name"
              quote="I use Herd as a way to make my voice heard. I know that my
  representatives use this information to make their decisions"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default PeopleGallery;
