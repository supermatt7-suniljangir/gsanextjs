import React from "react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils.js";
import InteractionButtons from "@/components/layout/others/InteractionButtons.jsx";

const HeroSection = () => {
  return (
    // check globals.css for the background image class
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat backgroundImgHome" />
      <div className="absolute inset-0 bg-foreground/60" />

      <Card className="relative z-10 w-full md:max-w-[60%] mx-auto bg-transparent !mt-20 h-full border-none shadow-none text-background">
        <CardContent
          className={cn(
            "flex flex-col items-center justify-center gap-8 p-6 h-3/4",
          )}
        >
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold !leading-tight ">
              Natural Stone Crafts Suppliers
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Available in hyderabad.
            </h2>
          </div>

          <InteractionButtons btnStyles={`!px-4`} />
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroSection;
