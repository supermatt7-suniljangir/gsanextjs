"use client";
import { Button } from "../ui/button";
import { handleCallClick } from "@/pixel/pixel.js";
import Image from "next/image";

const OurSpeciality = () => {
    const phoneNumber = "+919949715123";

    return (
        <div className="md:mt-8 p-4 sm:p-8">
            <h2 className="text-4xl font-bold text-center mb-8">Our Speciality</h2>

            {/* Container */}
            <div className="flex justify-around gap-4 flex-col-reverse md:flex-row items-center">
                {/* Text Section */}
                <div className="w-full md:w-[45%] space-y-4 text-center md:text-start">
                    <p>
                        Our specialty lies in crafting custom designs that closely align with your vision.
                        We strive to achieve a remarkable 90% resemblance to the design you provide,
                        ensuring a personalized and tailored result that truly reflects your unique preferences.
                    </p>

                    <Button
                        className="w-1/2 mt-4"
                        onClick={() => {
                            handleCallClick();
                            window.location.href = `tel:${phoneNumber}`;
                        }}
                    >
                        Call Now
                    </Button>
                </div>



                <div className="md:w-[45%] w-full md:flex-col space-y-4 flex-row">
                    <Image
                        src="/assets/temple/bg.webp"
                        width={250}
                        height={250}
                        alt="Our Speciality"
                    />
                    <Image
                        src="/assets/gazebo/bg.webp"
                        width={250}
                        height={250}
                        alt="Our Speciality"
                        className="ml-auto"
                    />
                    <Image
                        src="/assets/mural-display/bg.webp"
                        width={250}
                        height={250}
                        alt="Our Speciality"
                    />
                </div>

            </div>
        </div>
    );
};

export default OurSpeciality;
