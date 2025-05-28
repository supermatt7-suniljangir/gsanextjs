import React from "react";
import HeroSection from "@/components/testimonials/HeroSection";
import CarouselUI from "@/components/testimonials/Carousel";
import { BASE_URL } from "@/lib/utils";

export const metadata = {
  title: "Testimonials | Global Stone Art",
  description:
      "Hear what our satisfied customers have to say about their experience with Global Stone Art’s premium stone designs and craftsmanship.",
  openGraph: {
    title: "Customer Testimonials | Global Stone Art",
    description:
        "See why clients love Global Stone Art – real reviews, real results, and timeless stonework that leaves a lasting impression.",
    siteName: "Global Stone Art",
    images: [
      {
        url: `${BASE_URL}/assets/temple/bg.webp?v=221`, // feel free to version this
        width: 1200,
        height: 630,
        alt: "Customer Testimonials",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Testimonials | Global Stone Art",
    description:
        "Discover why clients trust Global Stone Art for stunning, handcrafted stone installations.",
    images: [`${BASE_URL}/assets/temple/bg.webp?v=101`], // different version? totally fine
  },
};

const Testimonials = () => {
  return (
      <div>
        <HeroSection />
        <CarouselUI />
      </div>
  );
};

export default Testimonials;
