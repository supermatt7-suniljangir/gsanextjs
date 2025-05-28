"use client";
import React, {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import AutoPlay from "embla-carousel-autoplay";

// Create autoplay plugin with correct options
const createAutoplayPlugin = () => {
    return AutoPlay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true
    });
};

const carouselItems = [
    {
        id: 1,
        image: "/assets/others/carousel/gazebo.webp",
    },
    {
        id: 2,
        image: "/assets/others/carousel/fountain.webp",
    },
    {
        id: 3,
        image: "/assets/others/carousel/waterfall.webp",
    },
    {
        id: 4,
        image: "/assets/others/carousel/stone-gate.webp",
    },
    {
        id: 5,
        image: "/assets/others/carousel/buddha-statue.webp",
    },
];

export default function CarouselUI() {
    // Create a new plugin instance when component mounts
    const autoplay = React.useRef(createAutoplayPlugin());

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
        },
        [autoplay.current]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
            // Don't reset autoplay on manual navigation
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
            // Don't reset autoplay on manual navigation
        }
    }, [emblaApi]);

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    React.useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });

        // Force start the autoplay
        autoplay.current.play();

        return () => {
            autoplay.current.stop();
        };
    }, [emblaApi]);

    React.useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                autoplay.current.stop();
            } else {
                autoplay.current.play();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <div className="relative w-full mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {carouselItems.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%] min-w-0">
                            <Card className="relative md:h-[95vh]">
                                <CardContent className="flex p-0 aspect-square w-full h-full md:aspect-auto">
                                    <img
                                        src={item.image}
                                        className="object-cover w-full h-full"
                                        alt={`Carousel image ${item.id}`}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-black/50 text-background hover:bg-black/70 transition-colors flex z-10"
                onClick={scrollPrev}
            >
                <ChevronLeft className="w-6 h-6"/>
            </button>
            <button
                className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-black/50 text-background hover:bg-black/70 transition-colors flex z-10"
                onClick={scrollNext}
            >
                <ChevronRight className="w-6 h-6"/>
            </button>

            <div className="absolute md:-bottom-8 left-1/2 -translate-x-1/2 flex gap-3 p-2 rounded-full">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === selectedIndex
                                ? "bg-black scale-110"
                                : "bg-black/20 hover:bg-black/60"
                        }`}
                        onClick={() => {
                            emblaApi?.scrollTo(index);
                            // Don't reset autoplay on dot navigation
                        }}
                    />
                ))}
            </div>
        </div>
    );
}