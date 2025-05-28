"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { trackCategoryVisit } from "@/pixel/pixel.js";

export function CardGridItem({ item }) {
    const handleClick = () => {
        trackCategoryVisit(item.category);
    };

    return (
        <Link href={`/designs/${item.category}`} onClick={handleClick}>
            <Card className="text-center w-full flex items-center justify-center shadow-lg relative">
                <CardContent className="p-2 w-full flex flex-col">
                    <div className="w-full relative">
                        <div className="aspect-[4/3] w-full">
                            <img
                                src={item.background}
                                alt={item.category}
                                className="rounded-md object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <CardTitle className="text-sm sm:text-base md:text-lg font-normal pt-2 capitalize">
                        {item.category.split("-").join(" ")}
                    </CardTitle>
                </CardContent>
            </Card>
        </Link>
    );
}
