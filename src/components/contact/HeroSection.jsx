import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    // check globals.css for the background image class
    <div className="relative h-[60vh] w-full overflow-hidden text-primary-foreground">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat backgroundImgContact" />
      <div className="absolute inset-0 bg-black/60 z-0" />
      <Card className="relative z-10 md:max-w-[65%] mx-auto mt-12 bg-transparent h-full border-none !shadow-none text-background">
        <CardContent className="flex flex-col items-center justify-center space-y-8 p-6 h-3/4">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold ">Contact Us</h1>
            <h2 className="text-base font-normal">
              Feel free to reach out to us at any time. Your inquiries and
              feedback are valuable to us
            </h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroSection;
