"use client";
import { handleCallClick, handleVisitUsClick } from "@/pixel/pixel.js"; // Assuming these handlers exist in pixel.js

const Footer = () => {
    // Handle the 'Call' button click (Tel link)
    const handleCallClickCustom = () => {
        handleCallClick();
        window.location.href = "tel:+919949715123";  // Open the phone dialer directly in the same tab
    };

    // Handle the 'Email' button click (mailto link)
    const handleEmailClickCustom = () => {
        window.location.href = "mailto:globalstoneart@gmail.com";  // Open the email client directly in the same tab
    };

    // Handle the 'Visit Us' button click (Google Maps link)
    const handleLocateUsClick = () => {
        handleVisitUsClick();
        window.location.href = "https://www.google.com/maps?ll=17.420017,78.229036&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=5709170577501979575";
    };

    return (
        <footer className="bg-foreground text-background py-16">
            <div className="mx-auto px-4 md:px-8">
                <div className="grid md:border-t grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 md:space-x-4 p-0 items-center place-content-center">
                    {/* Logo & Description Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 ">
                            <div className="w-12 h-12 relative">
                                <img
                                    src='/gsalogo.jpg'
                                    alt="Global Stone Art"
                                    className="object-contain w-12 h-12 rounded-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-medium">Global Stone Art</h2>
                        </div>
                        <p className="text-gray-400 text-sm">
                            We craft and supply premium stone products, including elevations, tiles, fountains, gazebos,
                            murals, lamps, tulsi pots, statues, and more. Sourced from Rajasthan and beyond, our natural
                            stones add timeless beauty to gardens, homes, and hotels.
                        </p>
                    </div>

                    {/* About Column */}
                    <div className="md:border-l md:border-r md:p-4 space-y-2">
                        <h3 className="text-lg font-medium">Information</h3>
                        <p className="text-gray-400 text-sm">
                            We are Hyderabad’s premier supplier of premium stone products, bringing the timeless beauty
                            of natural stones to your homes, gardens, and commercial spaces. Sourced from the finest
                            quarries of Rajasthan and beyond, our extensive collection includes exquisite elevations,
                            tiles, fountains, gazebos, murals, lamps, tulsi pots, statues, and much more.
                        </p>
                    </div>

                    {/* Categories and Help Center - Always 2 columns */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="grid grid-cols-2 gap-8 md:gap-4 place-items-center">
                            {/* Categories Column */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium">Categories</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="/designs/gazebo"
                                            className="text-gray-400 hover:text-background transition-colors"
                                        >
                                            Gazebo
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designs/fountain"
                                            className="text-gray-400 hover:text-background transition-colors"
                                        >
                                            Fountains
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designs/wall-mural"
                                            className="text-gray-400 hover:text-background transition-colors"
                                        >
                                            Murals
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designs/temple"
                                            className="text-gray-400 hover:text-background transition-colors"
                                        >
                                            Temples
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Help Center Column */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium">Help Center</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <span
                                            className="text-gray-400 hover:text-background transition-colors cursor-pointer"
                                            onClick={handleCallClickCustom}
                                        >
                                            Call us
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            className="text-gray-400 hover:text-background transition-colors cursor-pointer"
                                            onClick={handleEmailClickCustom}
                                        >
                                            Email
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            className="text-gray-400 hover:text-background transition-colors cursor-pointer"
                                            onClick={handleLocateUsClick}
                                        >
                                            Visit us
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
