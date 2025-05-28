"use client";
import { Button } from "@/components/ui/button.jsx";

import { Milestone, Phone } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils.js";
import { handleCallClick, handleVisitUsClick } from "@/pixel/pixel.js";

const InteractionButtons = ({ styles, btnStyles, children }) => {
  // Handle the 'Locate Us' button click (Google Maps)
  const handleLocateUsClick = () => {
    handleVisitUsClick();
    window.location.href =
      "https://www.google.com/maps?ll=17.420017,78.229036&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=5709170577501979575";
  };

  // Handle the 'Call' button click (Tel link)
  const handleCallClickCustom = () => {
    handleCallClick();
    window.location.href = "tel:+919949715123"; // Open the phone dialer directly in the same tab
  };

  return (
    <div className={cn("flex gap-4 justify-center w-full", styles)}>
      <Button
        className={cn(
          "bg-foreground/60 !p-2 rounded-none text-background text-xs md:text-sm font-light",
          btnStyles,
        )}
        onClick={handleLocateUsClick} // Navigate to Maps
      >
        <Milestone className="!h-3 !w-3" /> Locate Us
      </Button>

      <Button
        className={cn(
          "bg-foreground/60 !p-2 rounded-none text-background text-xs md:text-sm font-light",
          btnStyles,
        )}
        onClick={handleCallClickCustom} // Navigate to tel link (phone dialer)
      >
        <Phone className="!h-3 !w-3" />
        Call
      </Button>

      {children}
    </div>
  );
};

export default InteractionButtons;
