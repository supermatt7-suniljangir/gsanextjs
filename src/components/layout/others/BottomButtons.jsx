"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MapPin, Phone, X } from "lucide-react";
import React, { useState } from "react";
import { handleCallClick, handleVisitUsClick } from "@/pixel/pixel.js";

const BottomButtons = ({ containerStyles, buttonStyles }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  // Handle 'Locate Us' button click (Google Maps)
  const handleLocateUsClick = () => {
    handleVisitUsClick();
    window.location.href = "https://www.google.com/maps?ll=17.420017,78.229036&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=5709170577501979575";
  };

  // Handle 'Call Us' button click (Tel link)
  const handleCallClickCustom = () => {
    handleCallClick();
    window.location.href = "tel:+919949715123"; // Opens the phone dialer directly
  };

  return (
      <div
          className={cn(
              "fixed bottom-5 right-5 z-50",
              "transition-transform duration-150 ease-in-out",
              expanded ? "scale-100 opacity-100" : "scale-90 opacity-80",
          )}
      >
        <Button
            variant="secondary"
            className="bg-foreground rounded-full text-background hover:text-primary w-16 h-16 flex items-center justify-center"
            onClick={toggleExpanded}
        >
          {expanded ? (
              <X className="!w-8 !h-8" />
          ) : (
              <MapPin className="!w-8 !h-8" />
          )}
        </Button>

        {expanded && (
            <div
                className={cn(
                    "absolute bottom-20 right-0 bg-background shadow-lg p-3 rounded-xl border border-border",
                    "flex flex-col gap-4 items-center scale-100 opacity-100 transition-all duration-150",
                    containerStyles,
                )}
            >
              {/* Locate Us Button with Pixel Tracking */}
              <Button
                  variant="secondary"
                  className={cn(
                      "bg-foreground px-8 rounded-md text-background hover:text-primary w-full",
                      buttonStyles,
                  )}
                  onClick={handleLocateUsClick} // Trigger Google Maps navigation
              >
                <MapPin className="!h-5 !w-5 mr-2" />
                Locate Us
              </Button>

              {/* Call Us Button with Pixel Tracking */}
              <Button
                  variant="secondary"
                  className={cn(
                      "bg-foreground px-8 rounded-md text-background hover:text-primary w-full",
                      buttonStyles,
                  )}
                  onClick={handleCallClickCustom} // Trigger phone dialer
              >
                <Phone className="!h-5 !w-5 mr-2" />
                Call Us
              </Button>
            </div>
        )}
      </div>
  );
};

export default BottomButtons;
