"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { categoryArray } from "@/data/Data";
import { trackCategoryVisit } from "@/pixel/pixel";
import Link from "next/link";

export default function Categories() {
    const router = useRouter();

    const handleCategoryClick = (category) => {
        trackCategoryVisit(category);
        router.push(`/designs/${category}`);
    };

    return (
        <div className="mt-12 p-2 md:p-8">
            <h2 className="text-center md:text-start text-2xl font-bold">
                Categories
            </h2>

            {/* Mobile Layout */}
            <div className="md:hidden overflow-x-auto scrollbar-hide">
                <div className="grid auto-cols-[75%] grid-flow-col grid-rows-2 gap-4 mt-8 pl-2 pr-8">
                    {categoryArray.map((item) => (
                        <Card
                            onClick={() => handleCategoryClick(item.category)}
                            className="text-center w-full flex items-center justify-center shadow-lg aspect-[4/3] mt-6 relative"
                            key={item.category}
                        >
                            <CardContent className="p-2 w-full h-full flex flex-col">
                                <div className="h-6/7 w-full relative -mt-6 overflow-hidden">
                                    <Image
                                        src={item.background}
                                        alt={item.category}
                                        fill
                                        className="rounded-md object-cover"
                                    />
                                </div>
                                <CardTitle className="text-sm font-normal py-2 mt-auto capitalize">
                                    {item.category.split("-").join(" ")}
                                </CardTitle>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-4 gap-6 mt-10">
                {categoryArray.map((item) => (
                    <Link href={`/designs/${item.category}`} key={item.category}>
                        <Card className="text-center w-full flex items-center justify-center shadow-lg mt-4 relative pt-6">
                            <CardContent className="p-4 w-full flex flex-col">
                                <div className="w-full relative -mt-12 pb-6">
                                    <div className="aspect-[4/3] w-full relative">
                                        <Image
                                            src={item.background}
                                            alt={item.category}
                                            fill
                                            className="rounded-md object-cover"
                                        />
                                    </div>
                                </div>
                                <CardTitle className="text-lg font-normal py-2 capitalize">
                                    {item.category.split("-").join(" ")}
                                </CardTitle>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
