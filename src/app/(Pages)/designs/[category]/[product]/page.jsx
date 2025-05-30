import { categories } from "@/data/Data";
import ProductModalClient from "@/components/modals/ProductModalClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { BASE_URL } from "@/lib/utils";

export async function generateMetadata({ params }) {
  const { category, product } = await params;
  const productCategory = categories[category];
  const productData = productCategory.media.find(
    (pd) => pd.id === Number(product)
  );
  if (!productData) {
    return {
      title: "Product Not Found | Global Stone Art",
      description: "This product does not exist or isn't available.",
    };
  }

  const categoryName = formatCategoryName(category);
  const imageUrl = productData.image.startsWith("http")
    ? `${productData.image}?v=9487`
    : `${BASE_URL}${productData.image}?v=3784`;

  const description = `Explore our premium ${categoryName.toLowerCase()} stone designs featuring exceptional craftsmanship and natural materials.`;

  // Construct the absolute URL for this page
  const pageUrl = `${BASE_URL}/designs/${category}/${product}`;

  return {
    title: `${productData.name} | ${categoryName} | Global Stone Art`,
    description,
    openGraph: {
      title: `${productData.name} | ${categoryName} | Global Stone Art`,
      description,
      url: pageUrl, // ← This was missing!
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: categoryName,
        },
      ],
      type: "website",
      siteName: "Global Stone Art", // Optional but recommended
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} | Stone Designs | Global Stone Art`,
      description,
      images: [imageUrl],
    },
    // Add these for better compatibility
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category, product } = await params;
  const productCategory = categories[category];
  const productData = productCategory.media.find(
    (pd) => pd.id === Number(product)
  );
  if (!productData || !productCategory) {
    return (
      <div className="h-screen md:p-4 p-4 flex items-center gap-4 flex-col justify-center bg-foreground text-background text-center">
        <h1 className="text-4xl">Product Not Found</h1>
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
    <div className="modal-container">
      {/* Your Modal Content */}
      <ProductModalClient product={productData} category={category} />
    </div>
  );
}

// -------- Helpers --------
function formatCategoryName(slug) {
  return slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// Always use absolute URLs for OpenGraph images
const getAbsoluteImageUrl = (path) => {
  return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};
