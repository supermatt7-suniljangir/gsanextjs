import { Card, CardContent } from "../ui/card";
import InteractionButtons from "@/components/layout/others/InteractionButtons.jsx";

const HeroSection = () => {
  return (
    // check globals.css for the background image class
    <div className="relative h-[60vh] w-full overflow-hidden text-primary-foreground">
      <div className="absolute inset-0 bg-cover  bg-[center_top_30%] bg-no-repeat backgroundImgAbout " />
      <div className="absolute inset-0 bg-black/60 z-0" />
      <Card className="relative z-10 md:max-w-[65%] mx-auto mt-12 bg-transparent h-full border-none !shadow-none text-background">
        <CardContent className="flex flex-col items-center justify-center space-y-8 p-6 h-3/4">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold ">About Us</h1>
            <h2 className="text-base font-normal">
              Learn more about our company and our mission to provide the best
              service to our customers.
            </h2>
              <InteractionButtons btnStyles={"px-4"}/>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroSection;
