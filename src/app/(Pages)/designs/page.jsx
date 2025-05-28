import { categoryArray } from "@/data/Data.js";
import { CardGridItem } from "@/components/designs/CardGridItems";
import { BASE_URL } from "@/lib/utils";

export const metadata = {
  title: "Explore Designs | Global Stone Art",
  description:
      "Browse all design categories and discover your next favorite layout.",
  openGraph: {
    title: "Explore Designs | Global Stone Art",
    description:
        "Browse all design categories and discover your next favorite layout.",
    images: [
      {
        url: `${BASE_URL}/assets/others/herobg.webp?v=2025`, // version it however you like
        width: 1200,
        height: 630,
        alt: "Explore Designs",
        type: "image/webp",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Designs | Global Stone Art",
    description:
        "Browse all design categories and discover your next favorite crafted stonework.",
    images: [`${BASE_URL}/assets/others/herobg.webp?v=231`], // alternate version? no problem
  },
};

export default function Designs() {
  return (
      <div className="relative h-auto w-full overflow-hidden pt-8 p-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat backgroundImgHome" />
        <div className="absolute inset-0 bg-foreground/75" />
        <h2 className="text-center md:text-start text-2xl font-bold">Designs</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {categoryArray.map((item) => (
              <CardGridItem key={item.id} item={item} />
          ))}
        </div>
      </div>
  );
}
