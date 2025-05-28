import { categories } from "@/data/Data.js";
import {BASE_URL} from "@/lib/utils";

// Async function for generating metadata
export async function generateMetadata(props) {
  const params = await props.params || {};  // in case it's lazily resolved
  const category = params.category;
  const categoryData = categories[category];

  if (!categoryData) {
    return {
      title: "Category Not Found | Global Stone Art",
      description: "This category does not exist or isn't available yet.",
    };
  }

  return {
    title: `${categoryData.category} | Designs | Global Stone Art`,
    description: `Explore our premium selection of ${categoryData.category} and other expertly crafted stonework.`,
    openGraph: {
      title: `${categoryData.category} | Designs | MySite`,
      description: `Check out our exclusive ${categoryData.category} collection — handcrafted, polished, and timeless.`,
      images: [
        {
          url: `${BASE_URL}${categoryData.background}`,
          width: 1200,
          height: 630,
          alt: categoryData.category,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryData.category} | Designs | MySite`,
      description: `Browse through our curated collection of ${categoryData.category} designs.`,
      images: [`${BASE_URL}${categoryData.background}`],
    },
  };
}

// Separate export for the CategoryPage component
export default function CategoryPage() {
  // Optional page if needed, can be empty or include modal fallback
  return null; // or loader/fallback if needed
}
