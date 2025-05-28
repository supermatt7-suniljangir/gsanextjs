"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AutoPlay from "embla-carousel-autoplay";
import { testimonials } from "@/lib/utils.js";

const user = "/assets/user.png";

const autoplayOptions = {
  delay: 4000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
};

export default function TestimonialCarousel() {
  const autoplay = React.useRef(AutoPlay(autoplayOptions));
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      slidesToScroll: 1,
    },
    [autoplay.current],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    return () => {
      autoplay.current.stop();
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full mx-auto p-8 mb-16">
      <h2 className="text-center text-3xl">Testimonials</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 py-8 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-[0_0_99%] md:flex-[0_0_30%] min-w-0 pl-4"
            >
              <Card
                className={`h-full transition-all duration-300 py-4 ${
                  index === selectedIndex ? "md:scale-105 md:shadow-lg" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {" "}
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="font-normal">{testimonial.content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-1 top-1/2 text-background bg-black/50 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full shadow-lg transition-colors flex z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-1 top-1/2 bg-black/50 text-background -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full shadow-lg transition-colors flex z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6 " />
      </button>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 p-2">
        {testimonials.map((_, index) => {
          // On mobile, show all dots
          // On desktop, show only 2 dots (for 2 groups of 3)
          if (!isMobile && index >= 2) return null;
          if (
            !isMobile &&
            testimonials.length > 3 &&
            index >= Math.ceil(testimonials.length / 3)
          )
            return null;

          return (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isMobile
                  ? index === selectedIndex
                    ? "bg-black scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                  : Math.floor(selectedIndex / 3) === index
                    ? "bg-black scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                if (isMobile) {
                  emblaApi?.scrollTo(index);
                } else {
                  emblaApi?.scrollTo(index * 3);
                }
                autoplay.current.reset();
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
