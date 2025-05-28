"use client";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {Button} from "@/components/ui/button";
import InteractionButtons from "@/components/layout/others/InteractionButtons";
import {cn} from "@/lib/utils";

export default function ProductModalClient({ product, category }) {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const router = useRouter();

  // Handle image click to open the modal
  const handleCardClick = () => {
    setIsDialogOpen(true);
  };

  // Handle dialog close and navigate back to the previous page
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    router.back(); // Navigate to the previous page
  };

  // Ask price button logic (opens WhatsApp)
  const shareOnWhatsApp = () => {
    const currentUrl = window.location.href;
    const ownerPhoneNumber = "919949715123"; // Include country code!
    const formattedPhone = ownerPhoneNumber.replace(/\D/g, "");
    const message = `Hey there, can you share the price of: ${currentUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_self");
  };

  return (
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-5xl w-auto max-h-[90vh] overflow-hidden p-0 border-none shadow-lg flex flex-col">
          <DialogTitle className="hidden">null</DialogTitle>
          <div className="flex flex-col h-full">
            {/* Image container with fixed height */}
            <div className="relative flex-1 min-h-0">
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain max-h-[75vh]"
              />
              <DialogClose className="absolute top-4 right-4 bg-foreground/60 rounded-full p-2 hover:bg-foreground/70">
                <X className="h-6 w-6 text-background" />
              </DialogClose>
            </div>

            {/* Button container with fixed height */}
            <div className="bg-background p-4 flex-shrink-0">
              <InteractionButtons
                  btnStyles="bg-foreground text-background rounded-md text-xs"
                  styles={cn("gap-2 sm:gap-4")}
              >
                <Button
                    onClick={shareOnWhatsApp}
                    className=" rounded-md bg-foreground text-background text-xs md:text-sm font-light sm:font-normal !px-4"
                >
                  <img
                      src={"/whatsapp.png"}
                      alt="ask price"
                      className={`!h-4 w-4 `}
                  />
                  Ask Price
                </Button>
              </InteractionButtons>
            </div>
          </div>
        </DialogContent>
      </Dialog>
  );
}
