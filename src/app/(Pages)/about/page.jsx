// app/about/page.tsx or page.jsx
import React from "react";
import HeroSection from "@/components/about/HeroSection";
import OurStory from "@/components/about/OurStory";
import CompanyInfo from "@/components/about/CompanyInfo";
import OurSpeciality from "@/components/about/OurSpeciality";
import {BASE_URL} from "@/lib/utils";

// Static metadata object export
export const metadata = {
    title: "About Us | Global Stone Art",
    description: "Learn about Global Stone Art – our story, values, and commitment to delivering world-class stone craftsmanship.",
    openGraph: {
        title: "About Us | Global Stone Art",
        description: "Learn about Global Stone Art – our story, values, and commitment to delivering world-class stone craftsmanship.",
        siteName: "Global Stone Art",
        images: [
            {
                url: `${BASE_URL}/assets/others/herobg.webp?v=8745`,
                width: 1200,
                height: 630,
                alt: "About Global Stone Art",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Global Stone Art",
        description: "Discover what drives Global Stone Art – excellence, tradition, and craftsmanship.",
        images: [`${BASE_URL}/assets/others/herobg.webp?v=983`],
    },

};

export default function About() {
    return (
        <div>
            <HeroSection />
            <OurStory />
            <CompanyInfo />
            <OurSpeciality />
        </div>
    );
}