"use client";

import { usePathname, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InteractionButtons from "@/components/layout/others/InteractionButtons.jsx";
import { handleWhatsAppClick } from "@/pixel/pixel.js";
import Image from "next/image"; // Use Next.js Image component for optimization

const ProductCard = ({ product }) => {
  const pathname = usePathname();
  const router = useRouter();

  if (!product || !product.image || !product.name) return null;

  // Redirect to modal/item route on card click
  const handleCardClick = () => {
    router.push(`${pathname}/${product.id}`, {
      scroll: false,
    });

  };


  // Ask price button logic (opens WhatsApp)
  const shareOnWhatsApp = () => {
    handleWhatsAppClick();

    const currentUrl = `${window.location.origin}${pathname}/${product.id}`;
    const phone = "919949715123"; // ✅ with country code
    const message = `Hey there, can you share the price of: ${currentUrl}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_self");
  };

  return (
      <Card className="lg:w-[30%] relative cursor-pointer sm:w-[47%] border-2 border-gray-200 w-full aspect-square shadow-2xl p-0">
        <CardContent className="p-2 h-full">
          <div className="relative w-full h-full" onClick={handleCardClick}>
            <Image
                src={product.image}  // Use Next.js Image component
                alt={product.name}
                layout="fill"  // Makes the image fill the parent div
                objectFit="cover"  // Ensures the image covers the container
                objectPosition="top"  // Keeps the image aligned to the top
            />
          </div>
          <div className="bg-background/60 p-4 flex-shrink-0 absolute bottom-0 w-full">
            <InteractionButtons btnStyles="bg-foreground text-background rounded-md text-xs">
              <Button
                  onClick={shareOnWhatsApp}
                  className="!p-2 rounded-md bg-foreground text-background text-xs md:text-sm font-light sm:font-normal"
              >
                <img
                    src="/whatsapp.png"
                    alt="ask price"
                    className="!h-4 w-4"
                />
                Ask Price
              </Button>
            </InteractionButtons>
          </div>
        </CardContent>
      </Card>
  );
};

export default ProductCard;
