"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import HeroSection from "@/components/catalogue/HeroSection";
import Products from "@/components/catalogue/Products";
import { categories } from "@/data/Data.js";

const CategoryDetails = () => {
    const params = useParams();
    const category = params?.category;
    const categoryData = categories[category];

    if (!categoryData) {
        return (
            <div className="h-screen md:p-4 p-4 flex items-center gap-4 flex-col justify-center bg-foreground text-background text-center">
                <h1 className="text-4xl">Category Not Found</h1>
                <p>
                    We regret to say that the specified range of products is not available
                    or there might be an issue.
                </p>
                <Link href="/">
                    <Button variant="secondary" className="rounded-none">
                        <ArrowBigLeft />
                        Back to Home
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <HeroSection category={categoryData} />
            <Products products={categoryData.media} />
        </div>
    );
};

export default CategoryDetails;
