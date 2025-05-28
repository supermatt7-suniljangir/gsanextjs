import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen md:p-4 p-4 flex items-center gap-4 flex-col justify-center bg-foreground text-background text-center">
        <h1 className="md:text-6xl text-4xl font-bold mb-8">Global Stone Art</h1>
      <h2 className="text-3xl">Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link href={"/"}>
        <Button variant="secondary" className="rounded-none">
          <ArrowBigLeft />
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
