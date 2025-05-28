import React from "react";
import HeroSection from "@/components/home/HeroSection";
import Carousel from "@/components/home/Carousel";
import Categories from "@/components/home/Categories";
import Gallary from "@/components/home/Gallary";
import Testimonials from "@/components/home/Testimonials";
import {BASE_URL} from "@/lib/utils";

// Static metadata object export
export const metadata = {
    title: "Global Stone Art",
    description: "Global Stone Art crafts and supplies premium stone products, including elevations, tiles, fountains, gazebos, murals, lamps, tulsi pots, statues, and more. Sourced from Rajasthan and beyond, our natural stones add timeless beauty to gardens, homes, and hotels.",
    openGraph: {
        title: "Global Stone Art",
        description: "Global Stone Art crafts and supplies premium stone products, including elevations, tiles, fountains, gazebos, murals, lamps, tulsi pots, statues, and more. Sourced from Rajasthan and beyond, our natural stones add timeless beauty to gardens, homes, and hotels.",
        siteName: "Global Stone Art",
        images: [
            {
                url: `${BASE_URL}/assets/others/herobg.webp`,
                width: 1200,
                height: 630,
                alt: "Global Stone Art",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Global Stone Art",
        description: "Global Stone Art crafts and supplies premium stone products, including elevations, tiles, fountains, gazebos, murals, lamps, tulsi pots, statues, and more.",
        images: [`${BASE_URL}/assets/others/herobg.webp`],
    },
};

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <div>
                <Carousel />
            </div>
            <Categories/>
            <Gallary />
            <Testimonials/>
        </div>
    );
};

export default HomePage;