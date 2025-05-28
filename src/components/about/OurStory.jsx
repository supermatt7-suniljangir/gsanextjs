import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";

const OurStory = () => {
    return (
        <div className="w-full flex justify-around p-4 md:p-8 flex-col md:flex-row items-center">
            <div className="relative w-full md:w-[48%] h-[60vh]">
                <Image
                    src="/assets/others/ourstory.webp"
                    alt="our-story"
                    layout="fill" // This will make the image cover the parent container
                    objectFit="cover" // Ensures the image covers the container without distortion
                    className="rounded-md"
                />
            </div>


            {/* stories container */}
            <div className="md:w-[45%]">
                <Card className="w-full text-center md:text-start p-2 h-full">
                    <CardHeader className="text-3xl font-extrabold px-2 md:px-4">
                        Our Story
                    </CardHeader>
                    <CardContent className="font-normal px-2 md:px-4">
                        <p>
                            Global Stone Art is a family-owned business that has been in
                            operation for over 15 years. We specialize in the design and
                            installation of custom granite countertops, marble countertops,
                            and quartz countertops for residential and commercial properties.
                            Our team of experts is dedicated to providing our customers with
                            the highest quality products and services. We take pride in our
                            attention to detail and our commitment to customer satisfaction.
                            We work closely with our clients to ensure that their vision
                            becomes a reality. Our goal is to exceed our customers&apos;
                            expectations and provide them with a beautiful and functional
                            space that they can enjoy for years to come.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default OurStory;
