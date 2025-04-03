// components/products/ProductCard.tsx
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  title: string;
  brand: string;
  variant: string;
  price: string;
  originalPrice?: string;
};

const ProductCard = ({
  title,
  brand,
  variant,
  price,
  originalPrice,
}: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-gray-100 w-24 h-24 rounded-md"></div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">{brand}</p>
          <p className="text-sm text-gray-500">{variant}</p>
          <h3 className="font-medium mt-1">{title}</h3>

          <div className="mt-2 flex items-center gap-2">
            <span className="font-bold">${price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          <Button size="sm" className="mt-3 w-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
