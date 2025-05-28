// app/contact/page.tsx (or .jsx if you're not using TypeScript)
import React from "react";
import HeroSection from "@/components/contact/HeroSection";
import ContactCards from "@/components/contact/ContactCards";
import Map from "@/components/contact/Map";
import SocialSection from "@/components/contact/SocialSection";
import { BASE_URL } from "@/lib/utils";

export const metadata = {
    title: "Contact Us | Global Stone Art",
    description:
        "Contact Global Stone Art – reach out to us for polished and top notch stone crafts.",
    openGraph: {
        title: "Contact Us | Global Stone Art",
        description:
            "Contact Global Stone Art – reach out to us for polished and top notch stone crafts.",
        siteName: "Global Stone Art",
        images: [
            {
                url: `${BASE_URL}/assets/temple/bg.webp?v=98`,
                width: 1200,
                height: 630,
                alt: "Contact: Global Stone Art",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Global Stone Art",
        description:
            "Contact Global Stone Art – reach out to us for polished and top notch stone craft.",
        images: [`${BASE_URL}/assets/temple/bg.webp?v=89`],
    },
};

const Contact = () => {
    return (
        <div>
            <HeroSection />
            <ContactCards />
            <Map />
            <SocialSection />
        </div>
    );
};

export default Contact;
