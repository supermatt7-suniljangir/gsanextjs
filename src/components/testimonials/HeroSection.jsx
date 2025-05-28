import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import InteractionButtons from "@/components/layout/others/InteractionButtons.jsx";

const user = "/assets/user.png";
const HeroSection = () => {
  return (
    // check globals.css for the background image class
    <div className="relative md:h-[100vh] p-4 w-full overflow-hidden text-primary-foreground">
      <div className="absolute inset-0 bg-cover bg-[center_top_30%] bg-no-repeat backgroundImgTestimonials" />
      <div className="absolute inset-0 bg-black/55 z-0" />

      <div className="relative flex flex-col  md:flex-row items-center justify-center h-full z-10 space-y-8 md:space-y-0 pt-10 pb-4">
        {/* Left Content */}
        <Card className="w-full md:w-1/2 mx-auto bg-transparent border-none !shadow-none text-background mt-8 md:mt-0">
          <CardContent className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <p className="text-xl">Our Testimonials</p>
                <div className="bar h-[1.2px] w-32 bg-background"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                What our clients say about us
              </h1>
              <p className="font-normal">
                Witness what our clients have to say about us and our services,
                and how we have helped them with their imagination.
              </p>
            </div>
            <InteractionButtons btnStyles={`!px-4`} styles={"justify-start"}/>
          </CardContent>
        </Card>

        {/* Right Content */}
        <div className="w-full md:w-1/2 max-w-2xl">
          <Card className="relative p-4">
            <div className="flex items-center gap-1 absolute -top-[3rem]">
              <img
                src={`/assets/others/users/user1.webp`}
                alt="hero-image"
                className="rounded-full w-16 h-16 relative object-cover"
              />

              <p className="text-lg font-semibold text-background">
                Rajesh Verma
              </p>
            </div>
            <CardContent className="space-y-4  p-2 ">
              <p className="font-normal">
                Global Stone Art's craftsmanship is unparalleled! The stone
                gazebo I ordered has completely transformed my garden into a
                luxurious retreat. Highly recommended for premium stone
                structures!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
