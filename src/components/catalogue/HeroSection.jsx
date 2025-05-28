"use client";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import InteractionButtons from "@/components/layout/others/InteractionButtons.jsx";

const HeroSection = ({ category }) => {
  const background = category?.background || "/assets/bg.jpeg";

  // Create a memoized array of the first three images with their positions
  const gridImages = useMemo(() => {
    // Get the first three images or repeat if fewer
    const images = category.media.slice(0, 3);
    // Fill with repeated images if fewer than 3
    while (images.length < 3) {
      images.push(images[images.length % images.length]);
    }

    // Define positions and styles for each image
    return [
      {
        image: images[0].image,
        alt: images[0].name,
        className:
            "col-span-1 row-span-1 aspect-square rounded-lg overflow-hidden shadow-lg transform -translate-y-4 md:-translate-y-6",
      },
      {
        image: images[1].image,
        alt: images[1].name,
        className:
            "col-span-1 row-span-1 aspect-square rounded-lg overflow-hidden shadow-lg transform translate-y-4 md:translate-y-6",
      },
      {
        image: images[2].image,
        alt: images[2].name,
        className:
            "col-span-2 row-span-1 w-3/5 mx-auto aspect-square rounded-lg overflow-hidden shadow-lg transform translate-y-4 md:translate-y-6",
      },
    ];
  }, [category?.media]);

  return (
      <div className="relative min-h-screen w-full overflow-hidden text-primary-foreground p-4">
        {/* Background Image with Overlay */}
        <div
            className={cn("absolute inset-0 bg-cover bg-center bg-no-repeat")}
            style={{
              backgroundImage: `url(${background})`,
            }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Content Container */}
        <div className="relative flex h-full w-full flex-col md:flex-row items-center justify-around mt-24 py-10 md:mt-0 md:py-0">
          {/* Text Content */}
          <Card className="relative w-full md:w-1/2 mx-auto bg-transparent border-none shadow-none text-background">
            <CardContent className="flex flex-col items-center text-center md:text-start justify-center space-y-8">
              <div className="space-y-3 w-full">
                <h1 className="text-4xl lg:text-5xl font-extrabold !leading-tight capitalize">
                  Explore {category.category.split("-").join(" ")}
                </h1>
                <h2 className="text-lg font-normal">
                  Get the best products in the market from a range starting from
                  just{" "}
                  <span className="block text-4xl sm:text-5xl font-extrabold mt-3">
                  ₹{category.price}
                </span>
                </h2>
              </div>
              <InteractionButtons styles={`w-full justify-center md:justify-start`} btnStyles={`!px-4`} />
            </CardContent>
          </Card>

          {/* Image grid with smaller images */}
          <div className="w-full md:w-1/2 p-4 md:mt-20">
            <div className="max-w-md mx-auto md:max-w-lg lg:max-w-xl">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {gridImages.map((item, index) => (
                    <div key={index} className={item.className}>
                      <div className="relative w-full h-full">
                        <Image
                            className="rounded-lg"
                            src={item.image}
                            alt={item.alt}
                            layout="fill" // This makes the image fill the parent div
                            objectFit="cover" // Ensures the image covers the container
                            objectPosition="top" // Keeps the image aligned to the top
                        />
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
